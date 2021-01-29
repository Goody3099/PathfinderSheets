using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Models
{
    public class Race
    {
        public int Id { get; set; }
        public string RaceName { get; set; }
        public int MovementSpeed { get; set; }
        public string Vision { get; set; }
        public string BonusAttributes { get; set; }
        public string Size { get; set; }
    }
}
