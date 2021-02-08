using PathfinderSheets.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Repository
{
    public interface IClassRepository
    {
        List<Class> Get();
        Class GetByLevelClassName(int level, string className);
    }
}
