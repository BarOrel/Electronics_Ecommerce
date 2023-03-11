using Data.Models;
using Data.Models.DTO;
using Data.Models.UserModels;
using Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text.Json;
using ToDoListPractice.Data.Services.JWT;

namespace ToDoListPractice.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<UserApplication> userManager;
        private readonly IGenericRepository<CreditCard> creditRepository;
        private readonly IJWTTokenService tokenService;
        private readonly SignInManager<UserApplication> signInManager;
        private readonly IGenericRepository<Address> addressRepository;
        private readonly IGenericRepository<Cart> cartRepository;

        public UserController(UserManager<UserApplication> userManager, IGenericRepository<CreditCard> creditRepository, IJWTTokenService tokenService, SignInManager<UserApplication> signInManager, IGenericRepository<Address> addressRepository, IGenericRepository<Cart> cartRepository)
        {
            this.userManager = userManager;
            this.creditRepository = creditRepository;
            this.tokenService = tokenService;
            this.signInManager = signInManager;
            this.addressRepository = addressRepository;
            this.cartRepository = cartRepository;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            UserApplication user = new()
            {
                UserName = model.UserName,
                Email = model.Email,
                FullName = $"{model.FirstName} {model.LastName}"
            };

            if (model.Region != "" && model.City != "" && model.Street != "" && model.AddressNumber != "")
            {
                Address address = new()
                {
                    Street = model.Street,
                    City = model.City,
                    Region = model.Region,
                    Number = model.AddressNumber
                };
                await addressRepository.Insert(address);
                var address1 = await addressRepository.Find(address);
                user.AddressId = address1.Id;
            }

            if (model.CreditCardNumber != 0 && model.CVV != 0 && model.Year_ExpirationDate != 0 && model.Month_ExpirationDate != 0)
            {
                CreditCard credit = new()
                {
                    Month_ExpirationDate = model.Month_ExpirationDate,
                    Year_ExpirationDate = model.Year_ExpirationDate,
                    Number = model.CreditCardNumber,
                    CVV = model.CVV,

                };
                await creditRepository.Insert(credit);
                var credit1 = await creditRepository.Find(credit);
                user.CreditCardId = credit1.Id;
            }

            var result = await userManager.CreateAsync(user, model.Password);



            if (result.Succeeded)
            {
                Cart cart = new() { UserId = user.Id, };
                await cartRepository.Insert(cart);
                return Ok(result);
            }


            return BadRequest(result);

        }


        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var userFromDB = await userManager.FindByNameAsync(model.Username);

            if (userFromDB == null)
                return BadRequest();

            var result = await signInManager.CheckPasswordSignInAsync(userFromDB, model.Password, false);

            if (!result.Succeeded)
                return BadRequest();

            return Ok(new
            {
                result = result,
                username = userFromDB.UserName,
                email = userFromDB.Email,
                userid = userFromDB.Id,
                token = tokenService.GenerateToken(userFromDB),
                isadmin = userFromDB.IsAdmin

            });

        }


        [HttpPost("AddCreditCard")]
        public async Task<IActionResult> AddCreditCard(CreditCardDTO cardDTO)
        {
            var user = await userManager.FindByIdAsync(cardDTO.UserId);
            if (user.CreditCardId == 0)
            {
                CreditCard credit = new()
                {
                    CVV = cardDTO.CVV,
                    Number = Int64.Parse(cardDTO.Number),
                    Month_ExpirationDate = cardDTO.Month_ExpirationDate,
                    Year_ExpirationDate = cardDTO.Year_ExpirationDate,
                };
                await creditRepository.Insert(credit);
                var creditCard = await creditRepository.Find(credit);
                user.CreditCardId = creditCard.Id;
                await userManager.UpdateAsync(user);
                return Ok(creditCard);
            }
            var card2 = await creditRepository.GetById(user.CreditCardId);
            card2.CVV = cardDTO.CVV;

            card2.Number = Int64.Parse(cardDTO.Number);
            card2.Year_ExpirationDate = cardDTO.Year_ExpirationDate;
            card2.Month_ExpirationDate = cardDTO.Month_ExpirationDate;
            await creditRepository.Update(card2);
            return Ok(card2);

        }


        [HttpPost("AddAddress")]
        public async Task<IActionResult> AddAddress(AddressDTO addressDTO)
        {
            var user = await userManager.FindByIdAsync(addressDTO.UserId);
            if (user.AddressId == 0)
            {
                Address address = new()
                {
                    Number = addressDTO.Number,
                    Street = addressDTO.Street,
                    City = addressDTO.City,
                    Region = addressDTO.Region
                };
                await addressRepository.Insert(address);
                var address1 = await addressRepository.Find(address);
                user.AddressId = address1.Id;
                await userManager.UpdateAsync(user);
                return Ok(address1);
            }
            var address2 = await addressRepository.GetById(user.AddressId);
            address2.Number = addressDTO.Number;
            address2.Street = addressDTO.Street;
            address2.City = addressDTO.City;
            address2.Region = addressDTO.Region;
            await addressRepository.Update(address2);
            return Ok(address2);

        }


        [HttpPost("AddAccountDetails")]
        public async Task<IActionResult> AddAccountDetails(DetailsDTO detailsDTO)
        {
            var user = await userManager.FindByIdAsync(detailsDTO.UserId);
            if (user != null)
            {
                user.UserName = detailsDTO.Username;
                user.FullName = detailsDTO.FullName;
                user.Email = detailsDTO.Email;
                await userManager.UpdateAsync(user);
                return Ok(user);
            }
            return BadRequest();
        }

        [HttpPost("ChangePassword")]
        public async Task<IActionResult> ChangePassword(ChangePasswordDTO DTO)
        {
            var user = await userManager.FindByIdAsync(DTO.UserId);
            if (user != null)
            {
                var res = await userManager.ChangePasswordAsync(user, DTO.CurrentPassword, DTO.NewPassword);
                if(res.Succeeded)
                {
                return Ok();

                }
                return BadRequest("faild");
            }
            return BadRequest("faild");
        }

        [HttpPost("UserValidation")]
        public async Task<IActionResult> UserValidation(string UserId)
        {
            var user = await userManager.FindByIdAsync(UserId);
            if (user != null)
            {
                return Ok(user.Id);
            }
            else { return BadRequest(); }

        }



        [HttpGet("AddressUser")]
        public async Task<IActionResult> GetAccountAddress(string UserId)
        {
            var user = await userManager.FindByIdAsync(UserId);
            if (user != null)
            {
                if (user.AddressId != 0)
                {
                    var userAddress = await addressRepository.GetById(user.AddressId);
                    return Ok(userAddress);

                }
                return BadRequest("User Does Not Have Address");
            }
            return BadRequest("error user is not founded");
        }

        [HttpGet("GetAccountDetails")]
        public async Task<IActionResult> GetAccountDetails(string UserId)
        {

            var user = await userManager.FindByIdAsync(UserId);
            if (user != null)
            {
                DetailsDTO DTO = new()
                {
                    FullName = user.FullName,
                    Email = user.Email,
                    Username = user.UserName
                };
            
              return Ok(DTO);
                
            }
            return BadRequest("error user is not founded");
        }

        //[HttpPost("ValidateToken")]
        //public async Task<IActionResult> ValidateToken(string Token)
        //{
        //    var res = tokenService.ValidateToken(Token);
        //    if (res) { return Ok(Token); }
        //    else { return BadRequest(); }

        //}
    }
}
