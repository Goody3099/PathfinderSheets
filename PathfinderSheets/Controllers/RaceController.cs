using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PathfinderSheets.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RaceController : ControllerBase
    {
        private readonly IRaceRepository _repo;

        public RaceController(IRaceRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var races = _repo.Get();
            return Ok(races);
        }
    }
}
