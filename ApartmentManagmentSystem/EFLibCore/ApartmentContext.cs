using DAL.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFLibCore
{
    public class ApartmentContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        public ApartmentContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("Data Source = localhost; Database = ApartmentManagmentSystem; integrated security = True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Apartment>().ToTable("Apartment");
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Due>().ToTable("Due");
            modelBuilder.Entity<Electricity>().ToTable("Electricity");
            modelBuilder.Entity<Water>().ToTable("Water");
            modelBuilder.Entity<APIAuthority>().ToTable("APIAuthority");
        }

        public DbSet<Apartment> Apartment { get; set; }
        public DbSet <User> User{ get; set; }
        public DbSet<Electricity> Electricity { get; set; }
        public DbSet<Water> Water { get; set; }
        public DbSet<Due> Due { get; set; }
        public DbSet<APIAuthority> APIAuthority { get; set; }
    }
}

