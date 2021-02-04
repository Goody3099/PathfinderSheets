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
    public class AlignmentController : ControllerBase
    {
        private readonly IAlignmentRepository _repo;

        public AlignmentController(IAlignmentRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var alignments = _repo.Get();
            return Ok(alignments);
        }
    }
}
