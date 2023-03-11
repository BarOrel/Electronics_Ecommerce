
using Data.Models;
using Microsoft.IdentityModel.Tokens;

namespace ToDoListPractice.Data.Services.JWT
{
    public interface IJWTTokenService
    {
        string GenerateToken(UserApplication user);
      
    }
}
