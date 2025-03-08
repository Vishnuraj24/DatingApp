using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using API.Entities;

namespace DatingApp.API.Entities
{

    [Table("Photos")]
    public class Photo
    {
        public int Id { get; set; }
        public required string Url { get; set; }
        public bool IsMain { get; set; }

        public string? PublicId { get; set; }

        //Navigation PROPERTIES - forein key --  entity framework documentation - required one to many relation

        public int AppUserId { get; set; }
        public AppUser AppUser { get; set; } = null!;

    }


}