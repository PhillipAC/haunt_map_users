using haunt_map_users.Models;
using haunt_map_users.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace haunt_map_users.Controllers.Api
{
    public class HauntsController : ApiController
    {
        private readonly ApplicationDbContext _context = new ApplicationDbContext();

        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(_context.Haunts.Select(x => new HauntViewModel()
            {
                ID = x.ID,
                Author = _context.Users.FirstOrDefault(user => user.Id == x.UserId.ToString()).UserName,
                Latitude = x.Latitude,
                Longitude = x.Longitude,
                Story = x.Story,
                Title = x.Title
            }));
        }
    }
}
