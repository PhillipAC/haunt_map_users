using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace haunt_map_users.Models
{
    public class Haunt
    {
        public int ID { get; set; } //ID
        public string Title { get; set; } //Tite of the story
        public string Story { get; set; } //Content of the story
        public double Latitude { get; set; } //Latitude of the Place
        public double Longitude { get; set; } //Longitude of the Place
        public Guid UserId { get; set; } //ID of the user who made it
    }
}