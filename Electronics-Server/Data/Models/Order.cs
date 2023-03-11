using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Order
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        public List<CartProduct>? Products { get; set; }

        public int FinalPrice { get; set; }

        public DateTime OrderTime { get; set; }

        public Address? Address { get; set; }

        public CreditCard? CreditCard { get; set; }
        
        public bool IsShipped { get; set; }

        public bool Open { get; set; }

    }
}
