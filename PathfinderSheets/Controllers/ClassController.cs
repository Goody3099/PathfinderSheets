﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PathfinderSheets.Models;
using PathfinderSheets.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        private readonly IClassRepository _repo;

        public ClassController(IClassRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var classes = _repo.Get();
            return Ok(classes);
        }

        [HttpGet("{level}/{classDataId}")]
        public IActionResult Get(int level, int classDataId)
        {
            var LevelClassName = _repo.GetByLevelClassName(level, classDataId);
            return Ok(LevelClassName);
        }
    }
}
