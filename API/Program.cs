using DatingApp.API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//all other services
builder.Services.AddApplicationServices(builder.Configuration);

//authentication
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod()
.WithOrigins("http://localhost:4200", "https://localhost:4200"));

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
