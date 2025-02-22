using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;


public class UsersController(DataContext dbContext) : BaseApiController
{
    [AllowAnonymous]
    [HttpGet] // /api/users
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await dbContext.Users.ToListAsync();

        return Ok(users);
    }
    [Authorize]
    [HttpGet("{id}")] // /api/users/3
    public ActionResult<AppUser> GetUser(int id)
    {
        var user = dbContext.Users.Find(id);

        if (user == null) return NotFound();

        return user;
    }
}

