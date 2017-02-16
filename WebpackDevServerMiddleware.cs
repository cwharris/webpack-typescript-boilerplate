
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace webpack_typescript_boilerplate
{
    public class WebpackDevServerMiddleware
    {
        private readonly RequestDelegate _next;
        public WebpackDevServerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {

        }
    }
}