namespace haunt_map_users.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateHauntWithGuid : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Haunts", "UserId", c => c.String(nullable: false)); 
            AlterColumn("dbo.Haunts", "UserId", c => c.Guid(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Haunts", "UserId", c => c.String(nullable: false));
            AlterColumn("dbo.Haunts", "UserId", c => c.Int(nullable: false));
        }
    }
}
