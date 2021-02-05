using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Models
{
    public class CharacterSheet
    {
        public Alignment Alignment { get; set; }
        public Class Class { get; set; }
        public int Acrobatics { get; set; }
        public int Age { get; set; }
        [Required]
        public int AlignmentId { get; set; }
        public int Appraise { get; set; }
        public int ArmorClass { get; set; }
        public int BasicAttackBonus { get; set; }
        public int Bluff { get; set; }
        public int CharacterLevel { get; set; }
        public int Charisma { get; set; }
        [Required]
        public int ClassId { get; set; }
        public int Climb { get; set; }
        public int ClimbSpeed { get; set; }
        public int CMBouns { get; set; }
        public int CMDefense { get; set; }
        public int Constitution { get; set; }
        public int Copper { get; set; }
        public int Craft { get; set; }
        public int CurrentEXP { get; set; }
        public int CurrentHealth { get; set; }
        public int Dexterity { get; set; }
        public int Diplomacy { get; set; }
        public int DisableDevice { get; set; }
        public int EscapeArtist { get; set; }
        public int FlatFootedAC { get; set; }
        public int Fly { get; set; }
        public int FlySpeed { get; set; }
        public int Fortitude { get; set; }
        public int Gold { get; set; }
        public int HandleAnimal { get; set; }
        public int Heal { get; set; }
        public int Id { get; set; }
        public int Inititiative { get; set; }
        public int Intelligence { get; set; }
        public int Intimidate { get; set; }
        public int KnowledgeArcana { get; set; }
        public int KnowledgeDungeoneering { get; set; }
        public int KnowledgeGeography { get; set; }
        public int KnowledgeHistory { get; set; }
        public int KnowledgeLocal { get; set; }
        public int KnowledgeNature { get; set; }
        public int KnowledgeNobility { get; set; }
        public int KnowledgePlanes { get; set; }
        public int KnowledgeReligion { get; set; }
        public int LandSpeed { get; set; }
        public int Linguistics { get; set; }
        public int MaximumHealth { get; set; }
        public int Melee { get; set; }
        public int NextLevelEXP { get; set; }
        public int Perception { get; set; }
        public int Platnium { get; set; }
        public int Profession { get; set; }
        [Required]
        public int RaceId { get; set; }
        public int Ranged { get; set; }
        public int Reflex { get; set; }
        public int Ride { get; set; }
        public int SenseMotive { get; set; }
        public int Silver { get; set; }
        public int SleightOfHand { get; set; }
        public int SpellResistance { get; set; }
        public int Stealth { get; set; }
        public int Strength { get; set; }
        public int Survival { get; set; }
        public int Swim { get; set; }
        public int SwimSpeed { get; set; }
        public int TotalSkillPoints { get; set; }
        public int TouchAC { get; set; }
        public int UseMagicDevice { get; set; }
        public int UserProfileId { get; set; }
        public int Will { get; set; }
        public int Wisdom { get; set; }
        public Race Race { get; set; }
        public string Armor { get; set; }
        public string CharacterFeats { get; set; }
        public string CharacterName { get; set; }
        public string CharacterPicture { get; set; }
        public string Deity { get; set; }
        public string Eyes { get; set; }
        public string Gender { get; set; }
        public string Hair { get; set; }
        public string Height { get; set; }
        public string Homeland { get; set; }
        public string Languages { get; set; }
        public string Size { get; set; }
        public string Spells { get; set; }
        public string Weapon { get; set; }
        public string Weight { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
