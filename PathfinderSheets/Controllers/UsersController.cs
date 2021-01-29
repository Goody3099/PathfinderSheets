using Microsoft.AspNetCore.Http;
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
    public class UsersController : ControllerBase
    {
        private IUsersRepository _repo;

        public UsersController(IUsersRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetUserProfile(string firebaseUserId)
        {
            return Ok(_repo.GetByFirebaseUserId(firebaseUserId));
        }

        [HttpPost]
        public IActionResult Post(Users users)
        {
            users.CreateDateTime = DateTime.Now;
            _repo.Add(users);
            return CreatedAtAction(
                nameof(GetUserProfile),
                new { firebaseUserId = users.FirebaseUserId },
                users);

        }
    }
}
