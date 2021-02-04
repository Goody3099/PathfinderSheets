using MoreLinq;
using PathfinderSheets.Data;
using PathfinderSheets.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Repository
{
    public class ClassRepository : IClassRepository
    {
        private readonly ApplicationDbContext _context;

        public ClassRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Class> Get()
        {
            return _context.Class
                .ToList();
        }

        public List<Class> Get2()
        {
            return _context.Class
                .DistinctBy(c => c.ClassName)
                .ToList();
        }
    }
}
