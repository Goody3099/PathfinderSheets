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

        public List<ClassData> Get()
        {
            return _context.ClassData
                .ToList();
        }

        public Class GetByLevelClassName(int level, string className)
        {
            var x = _context.ClassData
                .Where(cd => cd.ClassName == className)
                .FirstOrDefault();
            var y = _context.Class
                .Where(c => c.ClassDataId == x.Id)
                .Where(c => c.CharacterLevel == level)
                .FirstOrDefault();
            return y;
        }
    }
}
