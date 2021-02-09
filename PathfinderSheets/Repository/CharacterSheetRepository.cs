using Microsoft.EntityFrameworkCore;
using PathfinderSheets.Data;
using PathfinderSheets.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Repository
{
    public class CharacterSheetRepository : ICharacterSheetRepository
    {
        private readonly ApplicationDbContext _context;

        public CharacterSheetRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<CharacterSheet> GetCharacterSheetsByUserProfileId(int id)
        {
            return _context.CharacterSheet
                .Where(cs => cs.UserProfileId == id)
                .Include(cs => cs.UserProfile)
                .Include(cs => cs.Alignment)
                .Include(cs => cs.ClassData)
                .Include(cs => cs.Race)
                .ToList();
        }

        public CharacterSheet GetById(int id)
        {
            return _context.CharacterSheet
                .Where(cs => cs.Id == id)
                .Include(cs => cs.ClassData)
                .Include(cs => cs.UserProfile)
                .Include(cs => cs.Alignment)
                .FirstOrDefault();
        }

        public void Add(CharacterSheet sheet)
        {
            _context.Add(sheet);
            _context.SaveChanges();
        }

        public void Update(CharacterSheet sheet)
        {
            _context.Entry(sheet).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var sheet = GetById(id);

            _context.Remove(sheet);
            _context.SaveChanges();
        }
    }
}
