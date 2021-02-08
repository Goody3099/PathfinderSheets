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
                .DistinctBy(c => c.ClassName)
                .ToList();
        }

        public Class GetByLevelClassName(int level, string className)
        {
            return _context.Class.Where(c => c.ClassName == className)
                .Where(c => c.CharacterLevel == level)
                .FirstOrDefault();
        }
    }
}
