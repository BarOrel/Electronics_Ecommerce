using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class UserApplication : IdentityUser
    {
        public string FullName { get; set; }
        public int CreditCardId { get; set; }
        public int AddressId { get; set; }
        public bool IsAdmin { get; set; }


    }
}
