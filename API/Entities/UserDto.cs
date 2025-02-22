using System;
using System.Collections.Generic;
using System.Linq;

namespace DatingApp.API.Entities
{

    public class UserDto
    {
        public required string username { get; set; }
        public required string token { get; set; }
    }


}