using PathfinderSheets.Data;
using PathfinderSheets.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Repository
{
    public class AlignmentRepository : IAlignmentRepository
    {
        private readonly ApplicationDbContext _context;

        public AlignmentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Alignment> Get()
        {
            return _context.Alignment
                .ToList();
        }
    }
}
