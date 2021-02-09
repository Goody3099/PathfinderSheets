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

        public Class GetByLevelClassName(int level, int classDataId)
        {
            var y = _context.Class
                .Where(c => c.ClassDataId == classDataId)
                .Where(c => c.CharacterLevel == level)
                .FirstOrDefault();
            return y;
        }
    }
}
