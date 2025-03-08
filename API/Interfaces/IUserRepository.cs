using System;
using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace DatingApp.API.Interfaces
{

    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser?> GetUserByIdAsync(int id);
        Task<AppUser?> GetUserByNameAsync(string username);

    }


}