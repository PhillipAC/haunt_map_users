using System.Web;
using System.Web.Optimization;

namespace haunt_map_users
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Scripts Used For Map
            bundles.Add(new ScriptBundle("~/bundles/geolocation").Include("~/Scripts/geolocation.js"));
            bundles.Add(new ScriptBundle("~/bundles/googlemaps").Include("~/Scripts/googlemap-form.js"));
            bundles.Add(new ScriptBundle("~/bundles/googlemapicons").Include("~/Scripts/googlemap-icon.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap-darkly.css",
                      "~/Content/Site.css"));
        }
    }
}
