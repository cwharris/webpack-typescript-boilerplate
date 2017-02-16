using Microsoft.AspNetCore.Builder;

namespace WebpackIntegration
{
    public static class WebpackDevServerMiddlewareExtensions
    {
        public static IApplicationBuilder UseWebpackDevServer(
            this IApplicationBuilder app,
            string configFile)
        {
            return app.UseMiddleware<WebpackDevServerMiddleware>(configFile);
        }
    }
}
