using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using Microsoft.AspNet.Identity;
using System.Web.Mvc;
using haunt_map_users.Models;

namespace haunt_map_users.Controllers
{
    public class HauntsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public ActionResult Map()
        {
            return View(db.Haunts.ToList());
        }

        // GET: Haunts
        public ActionResult Index()
        {
            return View(db.Haunts.ToList());
        }

        // GET: Haunts/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Haunt haunt = db.Haunts.Find(id);
            if (haunt == null)
            {
                return HttpNotFound();
            }
            return View(haunt);
        }

        // GET: Haunts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Haunts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Title,Story,latitude,longitude,UserId")] Haunt haunt)
        {
            if (ModelState.IsValid)
            {
                db.Haunts.Add(haunt);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(haunt);
        }

        // GET: Haunts/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Haunt haunt = db.Haunts.Find(id);
            if (haunt == null)
            {
                return HttpNotFound();
            }
            return View(haunt);
        }

        // POST: Haunts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Title,Story,latitude,longitude,UserId")] Haunt haunt)
        {
            if (ModelState.IsValid)
            {
                db.Entry(haunt).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(haunt);
        }

        // GET: Haunts/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Haunt haunt = db.Haunts.Find(id);
            if (haunt == null)
            {
                return HttpNotFound();
            }
            return View(haunt);
        }

        // POST: Haunts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Haunt haunt = db.Haunts.Find(id);
            db.Haunts.Remove(haunt);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
