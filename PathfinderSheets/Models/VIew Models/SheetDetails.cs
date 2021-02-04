using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Models.VIew_Models
{
    public class SheetDetails
    {
        public UserProfile UserProfile { get; set; }
        public Class Class { get; set; }
        public Race Race { get; set; }
        public Alignment Alignment { get; set; }
        public CharacterSheet CharacterSheet { get; set; }
    }
}
