namespace haunt_map_users.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUserToTour : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Tours", "UserID", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Tours", "UserID");
        }
    }
}
