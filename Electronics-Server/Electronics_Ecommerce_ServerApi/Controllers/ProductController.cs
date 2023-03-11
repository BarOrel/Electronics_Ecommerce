using Data;
using Data.Models;
using Data.Models.DTO;
using Data.Models.Enums;
using Data.Repository;
using Data.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace Electronics_Ecommerce_ServerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        
        private readonly UserManager<UserApplication> userManager;
        IGenericRepository<Product> productRepository;
        private readonly IGenericRepository<Cart> cartRepository;
        private readonly IService service;
        private readonly EcommerceDbContext dbContext;


        public ProductController(UserManager<UserApplication> userManager, IService service, IGenericRepository<Product> genericRepository,
             IGenericRepository<Cart> CartRepository,
        EcommerceDbContext dbContext )
        {
            this.userManager = userManager;
            this.service = service;
            this.dbContext = dbContext;
            this.productRepository = genericRepository;
            cartRepository = CartRepository;
        }

        [HttpGet("GetProduct")]
        public async Task<IActionResult> GetProductLike(Category category) 
        {
            var res = await productRepository.GetAll();
            if (category != Category.All)
            {
                res = res.Where(n => n.Category == category);
                return Ok(res);

            }
            return Ok(res);
        }
        
        [HttpGet("Details/{Index}")]
        public async Task<IActionResult> GetProduct(int Index)
        {
            var res = await productRepository.GetById(Index);
            return Ok(res);
        }


        [HttpPost]
        public async Task<IActionResult> Add(Product product)
        {
            if (product == null) { return BadRequest(); }
            await productRepository.Insert(product);
            return Ok(product);           
        }
        
        [HttpPost("AddCart")]
        public async Task<IActionResult> AddCart(Cart cart)
        {
           
            var res = await dbContext.Carts.Include(n => n.Products).ToListAsync();
            
            return Ok(res);
        }



        [HttpGet("GetProductsHome")]
        public async Task<IActionResult> GetProdcutsHome()
        {
            var res = await productRepository.GetAll();
            var discounted1 = res.Where(n => n.Discount == 0).Take(2).ToList();
            var discounted2 = res.Where(n => n.Discount == 0).Skip(2).Take(2).ToList();

            var mobilePhones = res.Where(n => n.Category == Category.Mobile_Phone).Take(8).ToList();
            var gamingConsoles = res.Where(n => n.Category == Category.Smart_Watches).Take(8).ToList();

            HomeDTO homeDTO = new()
            {
                DiscountedProducts1 = discounted1,
                DiscountedProducts2 = discounted2,
                GamingConsoles = gamingConsoles,
                MobilePhones = mobilePhones
            };
           
            return Ok(homeDTO);
        }




       


    }


















    }

        



 







