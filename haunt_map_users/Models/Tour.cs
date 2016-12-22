using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace haunt_map_users.Models
{
    public class Tour
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string UserID { get; set; }
    }
}