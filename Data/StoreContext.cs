#region using
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyStore.Data.Entities;
#endregion

namespace MyStore.Data
{
    public class StoreContext : IdentityDbContext<IdentityUser>
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Product>(e => e.ToTable("Products"));
            builder.Entity<Customer>(e =>
            {
                e.ToTable("Customers");
                e.HasMany(c => c.Addresses);
            });
            builder.Entity<Address>(e => e.ToTable("Addresses"));
            builder.Entity<Order>(e => {
                e.ToTable("Orders");
                e.HasOne(o => o.Customer);
                e.HasOne(o => o.Address);
                e.HasMany(o => o.Items);
            });
            builder.Entity<OrderItem>(e => {
                e.ToTable("OrderItems");
                e.HasOne(i => i.Product);
            });

            // https://github.com/aspnet/Identity/issues/300
            var entityTypes = builder.Model.GetEntityTypes();
            foreach (var entityType in entityTypes)
            {
                var table = entityType.Relational().TableName;
                if (table.StartsWith("AspNet"))
                {
                    // Remove AspNet prefix
                    entityType.Relational().TableName = table.Substring(6);
                }
            }
        }
    }
}
