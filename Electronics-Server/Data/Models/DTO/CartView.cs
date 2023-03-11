using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models.DTO
{
    public class CartView
    {
        public List<CartProduct>? Products { get; set; }
        public int FinalPrice { get; set; }
        
    }
}
