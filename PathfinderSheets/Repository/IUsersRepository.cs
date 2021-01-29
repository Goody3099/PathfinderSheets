using PathfinderSheets.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfinderSheets.Repository
{
    public interface IUsersRepository
    {
        void Add(Users users);
        User GetByFirebaseUserId(string firebaseUserId);
    }
}
