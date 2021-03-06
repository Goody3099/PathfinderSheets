﻿using PathfinderSheets.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Repository
{
    public interface IClassRepository
    {
        List<ClassData> Get();
        Class GetByLevelClassName(int level, int classDataId);
    }
}
