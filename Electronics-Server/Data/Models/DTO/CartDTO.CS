using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models.DTO
{
    public  class CartDTO
    {
        public Product Product { get; set; }
        public string UserId { get; set; }
    }
}
