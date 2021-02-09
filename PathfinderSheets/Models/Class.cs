using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Models
{
    public class Class
    {
        public int Id { get; set; }
        public int ClassDataId { get; set; }
        public int CharacterLevel { get; set; }
        public int BaB { get; set; }
        public int Reflex { get; set; }
        public int Will { get; set; }
        public int Fort { get; set; }
        public int HitDie { get; set; }
        public int SkillPoints { get; set; }
    }
}
