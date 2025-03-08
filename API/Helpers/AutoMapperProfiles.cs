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
            CreateMap<AppUser, MemberDto>()
                .ForMember(d => d.PhotoUrl, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain)!.Url));
            CreateMap<Photo, PhotoDto>();
        }

    }

    // 1. CreateMap<AppUser, MemberDto>()
    // This line tells AutoMapper to create a mapping between the AppUser class (source) and the MemberDto class (destination).

    // 2. .ForMember(d => d.PhotoUrl, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain)!.Url))
    // This part of the code is a custom mapping configuration for the PhotoUrl property in the MemberDto class. Here's how it works:

    // d => d.PhotoUrl
    // This specifies the destination property (PhotoUrl) in the MemberDto class that you want to map.

    // o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain)!.Url)
    // This specifies the source of the value for the PhotoUrl property.

    // s represents the source object (AppUser).

    // s.Photos accesses the Photos property of the AppUser object, which is a list of Photo objects.

    // FirstOrDefault(x => x.IsMain) finds the first photo in the Photos list where the IsMain property is true (the main photo).

    // !.Url accesses the Url property of the main photo. The ! (null-forgiving operator) is used to tell the compiler that you are sure the result of FirstOrDefault will not be null. If no main photo is found, this could throw an exception at runtime.

    // What This Does
    // It maps the Url of the main photo (where IsMain is true) from the AppUser.Photos list to the PhotoUrl property in the MemberDto.


}