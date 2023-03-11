using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models.UserModels
{
    public class RegisterModel
    {
        [Required]
        public string UserName { get; set;}
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        
        // Address Options
        public string Region { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Street { get; set; } = string.Empty;
        public string AddressNumber { get; set; } = string.Empty;

        // Credit Card Opetions
        public int CreditCardNumber { get; set; } 
        public int CVV { get; set; }
        public int Year_ExpirationDate { get; set; }
        public int Month_ExpirationDate { get; set; }
    }
}
