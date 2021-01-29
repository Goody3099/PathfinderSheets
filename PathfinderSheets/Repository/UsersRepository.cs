using PathfinderSheets.Data;
using PathfinderSheets.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Repository
{
    public class UsersRepository : IUsersRepository
    {
        private readonly ApplicationDbContext _context;

        public UsersRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Users GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.Users
                .FirstOrDefault(u => u.FirebaseUserId == firebaseUserId);
        }

        public void Add(Users users)
        {
            _context.Add(users);
            _context.SaveChanges();
        }
    }
}
