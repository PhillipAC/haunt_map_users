using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace haunt_map_users.Models
{
    public class TourPart
    {
        Haunt haunts { get; set; }
        ApplicationUser user { get; set; }
        int UserId { get; set; }
    }
}