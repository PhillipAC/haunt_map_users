using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace haunt_map_users.ViewModels
{
    public class HauntViewModel
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Story { get; set; }
        public string Author { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
    }
}