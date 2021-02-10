using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PathfinderSheets.Models;
using PathfinderSheets.Models.VIew_Models;
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
            //var currentUser = GetCurrentUserProfile();
            var characterSheets = _characterSheetRepo.GetCharacterSheetsByUserProfileId(1);
            List<SheetDetails> sheetDetails = new List<SheetDetails>();
            foreach (var character in characterSheets)
            {
                sheetDetails.Add(new SheetDetails()
                {
                    Alignment = character.Alignment,
                    ClassData = character.ClassData,
                    Race = character.Race,
                    CharacterSheet = _characterSheetRepo.GetById(character.Id),
                    UserProfile = character.UserProfile,
                });
            }
            return Ok(sheetDetails);
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
            sheet.UserProfileId = currentUser.Id;
            _characterSheetRepo.Add(sheet);
            return Ok(sheet);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, CharacterSheet sheet)
        {
            var existingSheet = _characterSheetRepo.GetById(id);

            if (id != sheet.Id)
            {
                return BadRequest();
            }
            if (existingSheet.UserProfileId != GetCurrentUserProfile().Id)
            {
                return Unauthorized();
            }
            existingSheet.Acrobatics = sheet.Acrobatics;
            existingSheet.Age = sheet.Age;
            existingSheet.AlignmentId = sheet.AlignmentId;
            existingSheet.Appraise = sheet.Appraise;
            existingSheet.ArmorClass = sheet.ArmorClass;
            existingSheet.Bluff = sheet.Bluff;
            existingSheet.CharacterLevel = sheet.CharacterLevel;
            existingSheet.Charisma = sheet.Charisma;
            existingSheet.ClassDataId = sheet.ClassDataId;
            existingSheet.Climb = sheet.Climb;
            existingSheet.ClimbSpeed = sheet.ClimbSpeed;
            existingSheet.CMBouns = sheet.CMBouns;
            existingSheet.CMDefense = sheet.CMDefense;
            existingSheet.Constitution = sheet.Constitution;
            existingSheet.Copper = sheet.Copper;
            existingSheet.Craft = sheet.Craft;
            existingSheet.CurrentEXP = sheet.CurrentEXP;
            existingSheet.CurrentHealth = sheet.CurrentHealth;
            existingSheet.Dexterity = sheet.Dexterity;
            existingSheet.Diplomacy = sheet.Diplomacy;
            existingSheet.DisableDevice = sheet.DisableDevice;
            existingSheet.EscapeArtist = sheet.EscapeArtist;
            existingSheet.FlatFootedAC = sheet.FlatFootedAC;
            existingSheet.Fly = sheet.Fly;
            existingSheet.FlySpeed = sheet.FlySpeed;
            existingSheet.Gold = sheet.Gold;
            existingSheet.HandleAnimal = sheet.HandleAnimal;
            existingSheet.Heal = sheet.Heal;
            existingSheet.Id = sheet.Id;
            existingSheet.Inititiative = sheet.Inititiative;
            existingSheet.Intelligence = sheet.Intelligence;
            existingSheet.Intimidate = sheet.Intimidate;
            existingSheet.Inventory = sheet.Inventory;
            existingSheet.KnowledgeArcana = sheet.KnowledgeArcana;
            existingSheet.KnowledgeDungeoneering = sheet.KnowledgeDungeoneering;
            existingSheet.KnowledgeGeography = sheet.KnowledgeGeography;
            existingSheet.KnowledgeEngineering = sheet.KnowledgeEngineering;
            existingSheet.KnowledgeHistory = sheet.KnowledgeHistory;
            existingSheet.KnowledgeLocal = sheet.KnowledgeLocal;
            existingSheet.KnowledgeNature = sheet.KnowledgeNature;
            existingSheet.KnowledgeNobility = sheet.KnowledgeNobility;
            existingSheet.KnowledgePlanes = sheet.KnowledgePlanes;
            existingSheet.KnowledgeReligion = sheet.KnowledgeReligion;
            existingSheet.LandSpeed = sheet.LandSpeed;
            existingSheet.Linguistics = sheet.Linguistics;
            existingSheet.MaximumHealth = sheet.MaximumHealth;
            existingSheet.Melee = sheet.Melee;
            existingSheet.NextLevelEXP = sheet.NextLevelEXP;
            existingSheet.Perform = sheet.Perform;
            existingSheet.Perception = sheet.Perception;
            existingSheet.Platnium = sheet.Platnium;
            existingSheet.Profession = sheet.Profession;
            existingSheet.RaceId = sheet.RaceId;
            existingSheet.Ranged = sheet.Ranged;
            existingSheet.Ride = sheet.Ride;
            existingSheet.SenseMotive = sheet.SenseMotive;
            existingSheet.Silver = sheet.Silver;
            existingSheet.SleightOfHand = sheet.SleightOfHand;
            existingSheet.Spellcraft = sheet.Spellcraft;
            existingSheet.SpellResistance = sheet.SpellResistance;
            existingSheet.Stealth = sheet.Stealth;
            existingSheet.Strength = sheet.Strength;
            existingSheet.Survival = sheet.Survival;
            existingSheet.Swim = sheet.Swim;
            existingSheet.SwimSpeed = sheet.SwimSpeed;
            existingSheet.TotalSkillPoints = sheet.TotalSkillPoints;
            existingSheet.TouchAC = sheet.TouchAC;
            existingSheet.UseMagicDevice = sheet.UseMagicDevice;
            existingSheet.UserProfileId = sheet.UserProfileId;
            existingSheet.Wisdom = sheet.Wisdom;
            existingSheet.Armor = sheet.Armor;
            existingSheet.CharacterFeats = sheet.CharacterFeats;
            existingSheet.CharacterName = sheet.CharacterName;
            existingSheet.CharacterPicture = sheet.CharacterPicture;
            existingSheet.Deity = sheet.Deity;
            existingSheet.Eyes = sheet.Eyes;
            existingSheet.Gender = sheet.Gender;
            existingSheet.Hair = sheet.Hair;
            existingSheet.Height = sheet.Height;
            existingSheet.Homeland = sheet.Homeland;
            existingSheet.Languages = sheet.Languages;
            existingSheet.Size = sheet.Size;
            existingSheet.Spells = sheet.Spells;
            existingSheet.Weapon = sheet.Weapon;
            existingSheet.Weight = sheet.Weight;

            _characterSheetRepo.Update(existingSheet);
            return NoContent();
        }

        [HttpDelete("{id}")]
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
