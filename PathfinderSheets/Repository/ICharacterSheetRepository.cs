using PathfinderSheets.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Repository
{
    public interface ICharacterSheetRepository
    {
        List<CharacterSheet> GetCharacterSheetsByUserProfileId(int id);
        CharacterSheet GetById(int id);
        void Add(CharacterSheet sheet);
        void Update(CharacterSheet sheet);
        void Delete(int id);
    }
}
