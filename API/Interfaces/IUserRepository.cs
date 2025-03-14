using System;
using System.Collections.Generic;
using System.Linq;
using API.Entities;
using DatingApp.API.DTOs;

namespace DatingApp.API.Interfaces
{

    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser?> GetUserByIdAsync(int id);
        Task<AppUser?> GetUserByNameAsync(string username);
        Task<MemberDto?> GetMemberAsync(string username);
        Task<IEnumerable<MemberDto>> GetMembersAsync();


    }


}