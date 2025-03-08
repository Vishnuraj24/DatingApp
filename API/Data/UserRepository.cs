using System;
using System.Collections.Generic;
using System.Linq;
using API.Entities;
using API.Data;
using DatingApp.API.Interfaces;
using Microsoft.EntityFrameworkCore;
using DatingApp.API.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace DatingApp.API.Data
{

    public class UserRepository(DataContext context, IMapper mapper) : IUserRepository
    {
        public async Task<AppUser?> GetUserByIdAsync(int id)
        {
            return await context.Users
            .FindAsync(id);
        }

        public async Task<AppUser?> GetUserByNameAsync(string username)
        {

            return await context.Users.Include(x => x.Photos)
            .SingleOrDefaultAsync(x => x.UserName == username);
        }

        public async Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            return await context.Users.Include(x => x.Photos).ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await context.SaveChangesAsync() > 0;
        }

        public void Update(AppUser user)
        {
            context.Entry(user).State = EntityState.Modified;
        }

        public async Task<MemberDto?> GetMemberAsync(string username)
        {
            return await context.Users.ProjectTo<MemberDto>(mapper.ConfigurationProvider)
           .SingleOrDefaultAsync(x => x.UserName == username);
        }

        public async Task<IEnumerable<MemberDto>> GetMembersAsync()
        {
            return await context.Users

                .ProjectTo<MemberDto>(mapper.ConfigurationProvider)
                .ToListAsync();

        }
    }


}