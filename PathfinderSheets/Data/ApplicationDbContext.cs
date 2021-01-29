using Microsoft.EntityFrameworkCore;
using PathfinderSheets.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Alignment> Alignment { get; set; }
        public DbSet<CharacterSheet> CharacterSheet { get; set; }
        public DbSet<Class> Class { get; set; }
        public DbSet<Race> Race { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
