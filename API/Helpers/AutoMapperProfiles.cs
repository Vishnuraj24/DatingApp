using System;
using System.Collections.Generic;
using System.Linq;
using API.Entities;
using AutoMapper;
using DatingApp.API.DTOs;
using DatingApp.API.Entities;

namespace DatingApp.API.Helpers
{

    public class AutoMapperProfiles : Profile
    {

        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>();
            CreateMap<Photo, PhotoDto>();
        }

    }


}