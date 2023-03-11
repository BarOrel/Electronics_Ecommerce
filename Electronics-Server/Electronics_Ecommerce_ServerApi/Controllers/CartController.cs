using Data;
using Data.Models;
using Data.Models.DTO;
using Data.Models.Enums;
using Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Electronics_Ecommerce_ServerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly IGenericRepository<Cart> genericRepository;
        private readonly EcommerceDbContext ecommerceDbContext;
        private readonly IGenericRepository<CartProduct> productRepository;

        public CartController(IGenericRepository<Cart> genericRepository, EcommerceDbContext ecommerceDbContext, IGenericRepository<CartProduct> productRepository)
        {
            this.genericRepository = genericRepository;
            this.ecommerceDbContext = ecommerceDbContext;
            this.productRepository = productRepository;
        }

        [HttpGet("{UserId}")]
        public async Task<IActionResult> GetAll(string UserId)
        {

            var finalPrice = 0;
            CartView cartView = new CartView();
            var res = ecommerceDbContext.Carts.Include(n=>n.Products).Where(n=>n.UserId== UserId).ToList();
            var products = res.FirstOrDefault().Products.Where(n => n.IsOrderd == false);

            foreach (var item in products)
            {
                finalPrice+= item.Price;
            }
            cartView.FinalPrice= finalPrice;
            cartView.Products = products.ToList();
            return Ok(cartView);
        }


        [HttpGet("GetCounter/{UserId}")]
        public async Task<IActionResult> GetCartItemsNumber(string UserId)
        {
            var res = ecommerceDbContext.Carts.Include(n => n.Products).Where(n => n.UserId == UserId).ToList();
            var products = res.FirstOrDefault().Products.Where(n => n.IsOrderd == false);
            return Ok(products.Count());
        }


        [HttpDelete("{ItemId}")]
        public async Task<IActionResult> Remove(int ItemId)
        {
            var prod = await productRepository.GetById(ItemId);
            await productRepository.Delete(prod);
            return Ok(prod);
        }

        [HttpPost]
        public async Task<IActionResult> AddToCart(CartDTO cartdto)
        {
            var res = await ecommerceDbContext.Carts.Include(n => n.Products).ToListAsync();
            var ves = res.Where(n => n.UserId == cartdto.UserId).FirstOrDefault();

            CartProduct cartProduct = new()
            {
                Name = cartdto.Product.Name,
                Description= cartdto.Product.Description,
                ImgUrl= cartdto.Product.ImgUrl,
                Price= cartdto.Product.Price,
                Discount= cartdto.Product.Discount,
                ReleaseDate= cartdto.Product.ReleaseDate,
                Color= cartdto.Product.Color,
                Manufacturer= cartdto.Product.Manufacturer,
                Category= cartdto.Product.Category,
                Storage= cartdto.Product.Storage,
                Type= cartdto.Product.Type,
                MilliampHours= cartdto.Product.MilliampHours,
                Resolution= cartdto.Product.Resolution,
                Panel= cartdto.Product.Panel,
                Inch= cartdto.Product.Inch,
                OperationSystem= cartdto.Product.OperationSystem,
                SizeMM= cartdto.Product.SizeMM,
                CpuType= cartdto.Product.CpuType,
                CpuName= cartdto.Product.CpuName,
                GpuType= cartdto.Product.GpuType,
                GpuName= cartdto.Product.GpuName,
                Cores= cartdto.Product.Cores,
                Threads= cartdto.Product.Threads,

            };
            cartProduct.Cart = ves;
            await productRepository.Insert(cartProduct);
            genericRepository.Update(ves);
           
            return Ok(ves);
        }
    }
}
