using Microsoft.AspNetCore.Mvc;

namespace DAL.Model
{
    public class Login
    {
        public string EMail { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        public byte[] PassworSalt { get; set; }
    }
    public class LoginDto
    {
        [FromBody]
        public string EMail { get; set; } = string.Empty;
        [FromBody]
        public string Password { get; set; } = string.Empty;
    }
    public class APIAuthority
    {
        public int Id { get; set; }
        public string EMail { get; set; }
        public string Password { get; set; }
        public bool Admin { get; set; }
    }
}