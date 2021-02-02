using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PathfinderSheets.Models;
using PathfinderSheets.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace PathfinderSheets.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharacterSheetController : ControllerBase
    {
        private readonly ICharacterSheetRepository _characterSheetRepo;
        private readonly IUserProfileRepository _userProfileRepository;

        public CharacterSheetController(ICharacterSheetRepository characterSheetRepo, IUserProfileRepository userProfileRepository)
        {
            _characterSheetRepo = characterSheetRepo;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var currentUser = GetCurrentUserProfile();
            var characterSheets = _characterSheetRepo.GetCharacterSheetsByUserProfileId(currentUser.Id);
            return Ok(characterSheets);
        }

        [HttpGet("{id}")]
        public IActionResult GetCharacterSheetById(int id)
        {
            var characterSheet = _characterSheetRepo.GetById(id);
            if (characterSheet == null)
            {
                return NotFound();
            }

            else
            {
                return Ok(characterSheet);
            }
        }

        [HttpPost]
        public IActionResult Post(CharacterSheet sheet)
        {
            var currentUser = GetCurrentUserProfile();
            _characterSheetRepo.Add(sheet);
            return Ok(sheet);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, CharacterSheet sheet)
        {
            var existingSheet = _characterSheetRepo.GetById(id);
            var originalId = existingSheet.Id;
            var originalUserProfileId = existingSheet.UserProfileId;

            if (id != sheet.Id)
            {
                return BadRequest();
            }
            if (existingSheet.UserProfileId != GetCurrentUserProfile().Id)
            {
                return Unauthorized();
            }
            existingSheet = sheet;
            existingSheet.Id = originalId;
            existingSheet.UserProfileId = originalUserProfileId;
            _characterSheetRepo.Update(existingSheet);
            return NoContent();
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var existingSheet = _characterSheetRepo.GetById(id);

            if (existingSheet.UserProfileId != GetCurrentUserProfile().Id)
            {
                return Unauthorized();
            }

            _characterSheetRepo.Delete(id);
            return NoContent();
        }
        private UserProfile GetCurrentUserProfile()
        {
            try
            {
                var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
