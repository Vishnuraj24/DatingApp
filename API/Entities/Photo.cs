using System;
using System.Collections.Generic;
using System.Linq;

namespace DatingApp.API.Entities
{

    public class Photo
    {
        public int Id { get; set; }
        public required string Url { get; set; }
        public bool IsMain { get; set; }

        public string? PublicId { get; set; }

    }


}