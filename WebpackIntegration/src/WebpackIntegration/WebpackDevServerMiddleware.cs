using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace WebpackIntegration
{
    public class WebpackDevServerMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly HttpClient _webpackHttpProxyClient;

        public WebpackDevServerMiddleware(
            IHostingEnvironment env,
            RequestDelegate next,
            string configFile)
        {
            _next = next;

            var fileName = Path.Combine(
                env.ContentRootPath,
                "node_modules",
                ".bin",
                "webpack-dev-server");

            var osEnVariable = Environment.GetEnvironmentVariable("OS");

            if (!string.IsNullOrEmpty(osEnVariable) &&
                string.Equals(osEnVariable, "Windows_NT", StringComparison.OrdinalIgnoreCase))
            {
                fileName += ".cmd";
            }

            var options = new Dictionary<string, string>
            {
                {"--config", Path.Combine(env.ContentRootPath, configFile)}
            };

            var arguments = options
                .Where(x => !string.IsNullOrWhiteSpace(x.Value))
                .Select(x => $"{x.Key} {x.Value}");

            var processStartInfo = new ProcessStartInfo(
                fileName,
                string.Join(" ", arguments))
            {
                UseShellExecute = false,
                CreateNoWindow = true,
                WorkingDirectory = env.ContentRootPath
            };

            var process = new Process
            {
                StartInfo = processStartInfo
            };

            process.Start();

            _webpackHttpProxyClient = new HttpClient
            {
                BaseAddress = new Uri("http://localhost:8080/")
            };
        }

        public async Task Invoke(HttpContext context)
        {
            var method = new HttpMethod(context.Request.Method);
            var request = new HttpRequestMessage(method, context.Request.Path);

            foreach (var header in context.Request.Headers)
            {
                request.Headers.Add(header.Key, header.Value.AsEnumerable());
            }

            var response = await _webpackHttpProxyClient.SendAsync(request);

            if (response.StatusCode == HttpStatusCode.NotFound)
            {
                await _next(context);
            }
            else
            {
                var responseStream = await response.Content.ReadAsStreamAsync();

                await responseStream.CopyToAsync(context.Response.Body);
            }
        }
    }
}
