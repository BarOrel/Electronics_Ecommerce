using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models.DTO
{
    public class CreditCardDTO
    {
        public string UserId { get; set; }
        public string Number { get; set; }
        public int CVV { get; set; }
        public int Year_ExpirationDate { get; set; }
        public int Month_ExpirationDate { get; set; }
    }
}
