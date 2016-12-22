using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(haunt_map_users.Startup))]
namespace haunt_map_users
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
