using Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models.DTO
{
    public class ProductForm : Product
    {

        public string Name { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        public int Price { get; set; }
        public int Discount { get; set; }
        public DateTime ReleaseDate { get; set; }
        public Product_Color Color { get; set; }
        public Manufacturer Manufacturer { get; set; }
        public Category Category { get; set; }


        public Storage Storage { get; set; }
        public ConsoleType Type { get; set; }
        public int MilliampHours { get; set; }
        public Resolution Resolution { get; set; }
        public Panel Panel { get; set; }
        public double Inch { get; set; }
        public OperationSystem OperationSystem { get; set; }
        public int SizeMM { get; set; }
        public CpuType CpuType { get; set; }
        public GpuType GpuType { get; set; }

        public int Cores { get; set; }
        public int Threads { get; set; }



    }
}
