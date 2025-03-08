using System;
using System.Collections.Generic;
using System.Linq;
using API.Data;
using DatingApp.API.Data;
using DatingApp.API.Interfaces;
using DatingApp.API.Services;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Extensions
{

    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
            IConfiguration config)
        {
            services.AddControllers();

            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            }
            );
            services.AddScoped<ITokenService, TokenService>(); //built in add isnot present for tokens so we are adding the scoped
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddCors();

            return services;
        }
    }


}