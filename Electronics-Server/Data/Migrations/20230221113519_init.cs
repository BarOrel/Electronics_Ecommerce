using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Street = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Number = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Carts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CreditCards",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Number = table.Column<long>(type: "bigint", nullable: false),
                    CVV = table.Column<int>(type: "int", nullable: false),
                    Year_ExpirationDate = table.Column<int>(type: "int", nullable: false),
                    Month_ExpirationDate = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CreditCards", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    Discount = table.Column<int>(type: "int", nullable: false),
                    ReleaseDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Color = table.Column<int>(type: "int", nullable: false),
                    Manufacturer = table.Column<int>(type: "int", nullable: false),
                    Category = table.Column<int>(type: "int", nullable: false),
                    Storage = table.Column<int>(type: "int", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false),
                    MilliampHours = table.Column<int>(type: "int", nullable: false),
                    Resolution = table.Column<int>(type: "int", nullable: false),
                    Panel = table.Column<int>(type: "int", nullable: false),
                    Inch = table.Column<double>(type: "float", nullable: false),
                    OperationSystem = table.Column<int>(type: "int", nullable: false),
                    SizeMM = table.Column<int>(type: "int", nullable: false),
                    CpuType = table.Column<int>(type: "int", nullable: false),
                    CpuName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GpuType = table.Column<int>(type: "int", nullable: false),
                    GpuName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Cores = table.Column<int>(type: "int", nullable: false),
                    Threads = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreditCardId = table.Column<int>(type: "int", nullable: false),
                    AddressId = table.Column<int>(type: "int", nullable: false),
                    IsAdmin = table.Column<bool>(type: "bit", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FinalPrice = table.Column<int>(type: "int", nullable: false),
                    OrderTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AddressId = table.Column<int>(type: "int", nullable: true),
                    CreditCardId = table.Column<int>(type: "int", nullable: true),
                    IsShipped = table.Column<bool>(type: "bit", nullable: false),
                    Open = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_Addresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Addresses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Orders_CreditCards_CreditCardId",
                        column: x => x.CreditCardId,
                        principalTable: "CreditCards",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CartProducts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    Discount = table.Column<int>(type: "int", nullable: false),
                    ReleaseDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Color = table.Column<int>(type: "int", nullable: false),
                    Manufacturer = table.Column<int>(type: "int", nullable: false),
                    Category = table.Column<int>(type: "int", nullable: false),
                    Storage = table.Column<int>(type: "int", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false),
                    MilliampHours = table.Column<int>(type: "int", nullable: false),
                    Resolution = table.Column<int>(type: "int", nullable: false),
                    Panel = table.Column<int>(type: "int", nullable: false),
                    Inch = table.Column<double>(type: "float", nullable: false),
                    OperationSystem = table.Column<int>(type: "int", nullable: false),
                    SizeMM = table.Column<int>(type: "int", nullable: false),
                    CpuType = table.Column<int>(type: "int", nullable: false),
                    CpuName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GpuType = table.Column<int>(type: "int", nullable: false),
                    GpuName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Cores = table.Column<int>(type: "int", nullable: false),
                    Threads = table.Column<int>(type: "int", nullable: false),
                    CartId = table.Column<int>(type: "int", nullable: true),
                    IsOrderd = table.Column<bool>(type: "bit", nullable: false),
                    OrderId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartProducts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CartProducts_Carts_CartId",
                        column: x => x.CartId,
                        principalTable: "Carts",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CartProducts_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Category", "Color", "Cores", "CpuName", "CpuType", "Description", "Discount", "GpuName", "GpuType", "ImgUrl", "Inch", "Manufacturer", "MilliampHours", "Name", "OperationSystem", "Panel", "Price", "ReleaseDate", "Resolution", "SizeMM", "Storage", "Threads", "Type" },
                values: new object[,]
                {
                    { 1, 9, 0, 0, null, 0, "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. It was announced as successor to the PlayStation 4 in April 2019, was launched on November 12, 2020", 0, null, 0, "https://www.citypng.com/public/uploads/preview/-11591925787cggjhepdvq.png", 0.0, 5, 0, "PlayStation 5", 0, 0, 499, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2792), 0, 0, 0, 0, 0 },
                    { 2, 9, 0, 0, null, 0, "The PlayStation 4 (PS4) is a home video game console developed by Sony Interactive Entertainment.", 0, null, 0, "https://www.seekpng.com/png/full/199-1998029_playstation4-vinyl-decal-stickers-for-ps4-game-console.png", 0.0, 5, 0, "PlayStation 4", 0, 0, 299, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2828), 0, 0, 0, 0, 0 },
                    { 3, 9, 0, 0, null, 0, "Xbox Series X is launching at participating retailers worldwide on 10 November 2020.", 0, null, 0, "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=a707", 0.0, 6, 0, "Xbox Series X", 0, 0, 329, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2830), 0, 0, 0, 0, 0 },
                    { 4, 9, 0, 0, null, 0, "Xbox One S is launching at participating retailers worldwide on 10 Aogust 2019.", 0, null, 0, "https://www.skinit.com/media/wysiwyg/category/skins/gaming-skins/microsoft/xbox-one-s-desktop.png", 0.0, 6, 0, "Xbox ", 0, 0, 329, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2831), 0, 0, 0, 0, 0 },
                    { 5, 1, 0, 0, null, 0, "iPhone 12 includes a faster and more powerful Image Signal Processor that enabled new camera functionality for 2020", 0, null, 0, "https://pngimg.com/d/iphone_12_PNG3.png", 0.0, 1, 0, "Iphone 12", 0, 0, 699, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2833), 0, 0, 0, 0, 0 },
                    { 6, 1, 0, 0, null, 0, "iPhone 12 pro includes a faster and more powerful Image Signal Processor that enabled new camera functionality for 2020", 0, null, 0, "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-graphite.png?v=13", 0.0, 1, 0, "Iphone 12 Pro", 0, 0, 799, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2834), 0, 0, 0, 0, 0 },
                    { 7, 1, 0, 0, null, 0, "iPhone 12 max includes a faster and more powerful Image Signal Processor that enabled new camera functionality for 2020.", 0, null, 0, "https://pngimg.com/uploads/iphone_12/iphone_12_PNG3.png", 0.0, 1, 0, "Iphone 12 Max", 0, 0, 899, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2836), 0, 0, 0, 0, 0 },
                    { 8, 1, 0, 0, null, 0, "The iPhone 13 and iPhone 13 Mini (stylized as iPhone 13 mini) are smartphones designed, developed, markete.", 0, null, 0, "https://images.dailyobjects.com/marche/product-images/1101/slick-phone-case-cover-for-iphone-13-images/Nimbus-Phone-Case-Cover-For-iPhone-13.png?tr=cm-pad_resize,v-2", 0.0, 1, 0, "Iphone 13", 0, 0, 799, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2837), 0, 0, 0, 0, 0 },
                    { 9, 1, 0, 0, null, 0, "The iPhone 13 and iPhone 13 Mini (stylized as iPhone 13 mini) are smartphones designed, developed, marketed.", 0, null, 0, "https://www.pngmart.com/files/21/iPhone-13-Pro-PNG-Image.png", 0.0, 1, 0, "Iphone 13 Pro", 0, 0, 799, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2838), 0, 0, 0, 0, 0 },
                    { 10, 1, 0, 0, null, 0, "The iPhone 13 and iPhone 13 Mini (stylized as iPhone 13 mini) are smartphones designed, developed, marketed", 0, null, 0, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652956000", 0.0, 1, 0, "Iphone 13 Max", 0, 0, 899, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2839), 0, 0, 0, 0, 0 },
                    { 11, 1, 0, 0, null, 0, "Apple's iPhone 14 models are identical in design to the iPhone 13 models, featuring flat edges, an aerospace-grade aluminum enclosure, and a glass back that enables wireless charging", 0, null, 0, "https://png.monster/wp-content/uploads/2022/09/png.monster-209.png", 0.0, 1, 0, "Iphone 14 ", 0, 0, 799, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2840), 0, 0, 0, 0, 0 },
                    { 12, 1, 0, 0, null, 0, "Apple's iPhone 14 models are identical in design to the iPhone 13 models, featuring flat edges, an aerospace-grade aluminum enclosure, and a glass back that enables wireless charging", 0, null, 0, "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$", 0.0, 1, 0, "Iphone 14 Pro", 0, 0, 899, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2841), 0, 0, 0, 0, 0 },
                    { 13, 1, 0, 0, null, 0, "Apple's iPhone 14 models are identical in design to the iPhone 13 models, featuring flat edges, an aerospace-grade aluminum enclosure, and a glass back that enables wireless charging", 0, null, 0, "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-pro-max-gold-back.png?v=13", 0.0, 1, 0, "Iphone 14 Max", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2843), 0, 0, 0, 0, 0 },
                    { 14, 1, 0, 0, null, 0, "The Samsung Galaxy S21 is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series.", 0, null, 0, "https://images.samsung.com/is/image/samsung/p6pim/il/galaxy-s21/gallery/il-galaxy-s21-5g-g991-sm-g991bzadmec-359240688", 0.0, 2, 0, "Galaxy S21", 0, 0, 799, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2844), 0, 0, 0, 0, 0 },
                    { 15, 1, 0, 0, null, 0, "The Samsung Galaxy S21 is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series.", 0, null, 0, "https://images.samsung.com/is/image/samsung/p6pim/sg/galaxy-s21/gallery/sg-galaxy-s21-5g-g996-sm-g996bzsgxsp-368336436?$650_519_PNG$", 0.0, 2, 0, "Galaxy S21+", 0, 0, 899, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2845), 0, 0, 0, 0, 0 },
                    { 16, 1, 0, 0, null, 0, "The Samsung Galaxy S21 is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series.", 0, null, 0, "https://images.samsung.com/is/image/samsung/p6pim/ca/galaxy-s21/gallery/ca-galaxy-s21-ultra-5g-g988-sm-g998wzkaxac-thumb-368336282", 0.0, 2, 0, "Galaxy S21 Ultra", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2847), 0, 0, 0, 0, 0 },
                    { 17, 1, 0, 0, null, 0, "The Samsung Galaxy S22 is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series.", 0, null, 0, "https://cdn.shopify.com/s/files/1/0552/5821/8633/products/96c7b58c6fadffd51dc61cea80e2901d.png?v=1666343215", 0.0, 2, 0, "Galaxy S22", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2848), 0, 0, 0, 0, 0 },
                    { 18, 1, 0, 0, null, 0, "The Samsung Galaxy S22+ is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series.", 0, null, 0, "https://d3m9l0v76dty0.cloudfront.net/system/photos/9279758/large/bc931c6792b57d70fcffdd20939e018e.png", 0.0, 2, 0, "Galaxy S22+", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2849), 0, 0, 0, 0, 0 },
                    { 19, 1, 0, 0, null, 0, "The Samsung Galaxy S22 ultra is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series.", 0, null, 0, "https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/gallery/1200cd0e901a448ab8c94e14a710c1b4?version=0", 0.0, 2, 0, "Galaxy S22 ultra", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2850), 0, 0, 0, 0, 0 },
                    { 20, 1, 0, 0, null, 0, "The Samsung Galaxy S22 is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series.", 0, null, 0, "https://nextech.co.il/wp-content/uploads/2023/02/green-8.png", 0.0, 2, 0, "Galaxy S23", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2851), 0, 0, 0, 0, 0 },
                    { 21, 1, 0, 0, null, 0, "The Samsung Galaxy S22+ is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series.", 0, null, 0, "https://d3m9l0v76dty0.cloudfront.net/system/photos/9279758/large/bc931c6792b57d70fcffdd20939e018e.png", 0.0, 2, 0, "Galaxy S23+", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2852), 0, 0, 0, 0, 0 },
                    { 22, 1, 0, 0, null, 0, "The Samsung Galaxy S22 ultra is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series.", 0, null, 0, "https://www.att.com/idpassets/global/devices/phones/samsung/samsung-galaxy-s23-ultra/carousel/phantomblack/phantomblack-4.png", 0.0, 2, 0, "Galaxy S23 ultra", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2855), 0, 0, 0, 0, 0 },
                    { 23, 1, 0, 0, null, 0, "The Xiaomi 11s is a good all-rounder. It's powerful, the camera produces nice images during the day and night, and the screen is superior to phone mid-rangers, with more pixels and above-average brightness. While the battery life is not standard-setting, it's solid, and the charging speed is excellent.", 0, null, 0, "https://www.bug.co.il/images/site/products/e275ec4b-eeab-4345-b35f-05b8233f031f.png", 0.0, 4, 0, "Xiaomi Note 11 Pro", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2856), 0, 0, 0, 0, 0 },
                    { 24, 1, 0, 0, null, 0, "The Xiaomi 11 pro is a good all-rounder. It's powerful, the camera produces nice images during the day and night, and the screen is superior to phone mid-rangers, with more pixels and above-average brightness. While the battery life is not standard-setting, it's solid, and the charging speed is excellent.", 0, null, 0, "http://i01.appmifile.com/webfile/globalimg/pic/Redmi-Note-11S-Blanco-Perla!800x800!85.png", 0.0, 4, 0, "Xiaomi Note 11S", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2857), 0, 0, 0, 0, 0 },
                    { 25, 1, 0, 0, null, 0, "The Xiaomi 11 is a good all-rounder. It's powerful, the camera produces nice images during the day and night, and the screen is superior to phone mid-rangers, with more pixels and above-average brightness. While the battery life is not standard-setting, it's solid, and the charging speed is excellent.", 0, null, 0, "https://d3m9l0v76dty0.cloudfront.net/system/photos/11206223/large/a56d598ce836e66e4b62f2272802da0b.png", 0.0, 4, 0, "Xiaomi Note 11", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2858), 0, 0, 0, 0, 0 },
                    { 26, 3, 0, 0, null, 0, "The biggest and brightest Apple Watch display. The Always‑On Retina display is 2000 nits at its peak and twice as bright as any other Apple Watch. The bigger display provides more room for workout metrics and detail‑packed watch faces.", 0, null, 0, "https://cdn.shopify.com/s/files/1/0157/3520/products/NM00736685_0007_855848007366_A2-PhotoRoom.png?v=1664873211", 0.0, 1, 0, "Apple Watch ultra", 0, 0, 950, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2859), 0, 0, 0, 0, 0 },
                    { 27, 3, 0, 0, null, 0, "Apple Watch Series 8 has an innovative new sensor that accurately samples your temperature while you sleep. Shifts in temperature provide insights into your overall wellness and can be caused by things like alcohol, exercise, or even illness.", 0, null, 0, "https://hotstore.hotmobile.co.il/media/catalog/product/cache/a73c0d5d6c75fbb1966fe13af695aeb7/s/t/starlight_1_2.png", 0.0, 1, 0, "Apple Watch series 8 41mm", 0, 0, 650, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2889), 0, 0, 0, 0, 0 },
                    { 28, 3, 0, 0, null, 0, "Apple Watch Series 8 has an innovative new sensor that accurately samples your temperature while you sleep. Shifts in temperature provide insights into your overall wellness and can be caused by things like alcohol, exercise, or even illness.", 0, null, 0, "https://hotstore.hotmobile.co.il/media/catalog/product/cache/a73c0d5d6c75fbb1966fe13af695aeb7/m/i/midnight02_1.png", 0.0, 1, 0, "Apple Watch series 8 45mm", 0, 0, 550, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2892), 0, 0, 0, 0, 0 },
                    { 29, 3, 0, 0, null, 0, "Apple Watch Series 8 has an innovative new sensor that accurately samples your temperature while you sleep. Shifts in temperature provide insights into your overall wellness and can be caused by things like alcohol, exercise, or even illness.", 0, null, 0, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLT3ref_VW_PF+watch-44-alum-midnight-nc-se_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1660778411615,1660759426989", 0.0, 1, 0, "Apple Watch se", 0, 0, 500, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2893), 0, 0, 0, 0, 0 },
                    { 30, 3, 0, 0, null, 0, "Apple Watch Series 8 has an innovative new sensor that accurately samples your temperature while you sleep. Shifts in temperature provide insights into your overall wellness and can be caused by things like alcohol, exercise, or even illness.", 0, null, 0, "https://api.sammobile.com/static/3-027_product_galaxy_watch5pro_blacktitanium_r_perspective_LI.png?1660133183", 0.0, 2, 0, "Samsung watch 5 Pro", 0, 0, 930, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2894), 0, 0, 0, 0, 0 },
                    { 31, 3, 0, 0, null, 0, "Apple Watch Series 8 has an innovative new sensor that accurately samples your temperature while you sleep. Shifts in temperature provide insights into your overall wellness and can be caused by things like alcohol, exercise, or even illness.", 0, null, 0, "https://images.samsung.com/is/image/samsung/p6pim/ph/2208/gallery/ph-galaxy-watch5-44mm-sm-r910nzaaasa-533197643?$650_519_PNG$", 0.0, 2, 0, "Samsung watch 5", 0, 0, 899, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2895), 0, 0, 0, 0, 0 },
                    { 32, 3, 0, 0, null, 0, "Apple Watch Series 8 has an innovative new sensor that accurately samples your temperature while you sleep. Shifts in temperature provide insights into your overall wellness and can be caused by things like alcohol, exercise, or even illness.", 0, null, 0, "https://images.samsung.com/is/image/samsung/p6pim/my/2108/gallery/my-galaxy-watch4-classic-398835-sm-r890nzkaxme-481102149?$650_519_PNG$", 0.0, 2, 0, "Samsung watch 4 classic", 0, 0, 650, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2897), 0, 0, 0, 0, 0 },
                    { 33, 2, 0, 0, null, 0, "Description. The iPad Pro 12.9-inch (2022) comes with 12.9-inch display and Apple's M2 processor. Specs also include Dual camera setup on the back with 12MP main sensor and up to 16GB RAM and 2TB internal storage.", 0, null, 0, "https://www.firstnet.com/content/dam/firstnet/images/tablets-and-laptops/firstnet-apple-ipad-pro-12-9-in-2022.png", 0.0, 1, 0, "Apple ipad pro 12.9", 0, 0, 1199, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2898), 0, 0, 0, 0, 0 },
                    { 34, 2, 0, 0, null, 0, "The 11-inch iPad Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 11 inches diagonally (actual viewable area is less).", 0, null, 0, "https://www.theiphonewiki.com/w/images/thumb/1/14/IPadPro_11-inch_2nd_generation.png/300px-IPadPro_11-inch_2nd_generation.png", 0.0, 1, 0, "Apple ipad pro 11", 0, 0, 999, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2899), 0, 0, 0, 0, 0 },
                    { 35, 2, 0, 0, null, 0, "In theory, the ‌iPad Air‌ is a more compelling package with the ‌M1‌ chip, 4GB of additional memory, a dedicated media engine, ‌Stage Manager‌ for multitasking, a better display, and a much better ‌Apple Pencil‌ experience, but in practice, users are unlikely to notice much difference between the devices.9 2022", 0, null, 0, "https://pro-digital.co.il/wp-content/uploads/2021/11/8901a1969a9b3023daf14443ac4d7225.png", 0.0, 1, 0, "Apple ipad Air 10.9", 0, 0, 1000, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2900), 0, 0, 0, 0, 0 },
                    { 36, 2, 0, 0, null, 0, "The stunning 10.9-inch Liquid Retina display makes an incredible canvas. So you can doodle, take notes, mark up documents, and a lot more with Apple Pencil. Record and refine from anywhere with high-quality built-in mics and landscape stereo speakers.", 0, null, 0, "https://d3m9l0v76dty0.cloudfront.net/system/photos/9055438/large/e81a08e554af37be8a6d600824a29e57.png", 0.0, 1, 0, "Apple ipad 10.9", 0, 0, 1169, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2901), 0, 0, 0, 0, 0 },
                    { 37, 2, 0, 0, null, 0, "The iPad 10.2 (2021) is offering 10.2 inch display that supports Apple Pencil and it has Wi-Fi only model or with LTE enabled. The tablet comes with 8526mAh battery, Apple A13 Bionic processor and offers two internal storage variants - 64GB or 256GB. Prices start from $329.", 0, null, 0, "https://hotstore.hotmobile.co.il/media/catalog/product/cache/a73c0d5d6c75fbb1966fe13af695aeb7/h/6/h69114077_1000x1000_2.png", 0.0, 1, 0, "Apple ipad 10.2", 0, 0, 759, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2903), 0, 0, 0, 0, 0 },
                    { 38, 2, 0, 0, null, 0, "", 0, null, 0, "https://images.samsung.com/is/image/samsung/p6pim/sg/sm-x906bzajxsp/gallery/sg-galaxy-tab-s8-ultra-5g-x906-sm-x906bzajxsp-534194325?$650_519_PNG$", 0.0, 2, 0, "Samsung Galaxy Tab S8 Ultra", 0, 0, 1299, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2905), 0, 0, 0, 0, 0 },
                    { 39, 2, 0, 0, null, 0, "", 0, null, 0, "https://res-1.cloudinary.com/grover/image/upload/v1646833195/cieclvic1gpo7h7sqgyv.png", 0.0, 2, 0, "Samsung Galaxy Tab 8+", 0, 0, 889, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2907), 0, 0, 0, 0, 0 },
                    { 40, 2, 0, 0, null, 0, "", 0, null, 0, "https://d3m9l0v76dty0.cloudfront.net/system/photos/8705804/original/f4a99cf07a6c9ec750e0e18778d64bb0.png", 0.0, 2, 0, "Samsung Galaxy Tab A8", 0, 0, 759, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2908), 0, 0, 0, 0, 0 },
                    { 41, 2, 0, 0, null, 0, "", 0, null, 0, "https://hotstore.hotmobile.co.il/media/catalog/product/cache/a73c0d5d6c75fbb1966fe13af695aeb7/e/0/e010022011_3_1_1_1.png", 0.0, 2, 0, "Samsung Galaxy Tab A7 Lite", 0, 0, 759, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2909), 0, 0, 0, 0, 0 },
                    { 42, 4, 0, 0, null, 0, "Colors matched to a vibrant and vivid image\r\nExperience vivid colors as they are designed to be in powerful 4K\r\n4K crystal processor\r\nA powerful 4K upgrade ensures that you get a resolution of up to 4K for the content you like. You will also experience more vivid color expressions thanks to its sophisticated color mapping technology.\r\n\r\n Feel a vivid hue of color as it is designed to be in powerful 4K\r\nSmooth motion for a clear image\r\nMotion Xcelerator\r\nCome experience clear images and performance because it automatically evaluates and compensates for frames for the content source.\r\n\r\nSmooth motion for a clear image\r\nFeel the reality of 4K UHD resolution\r\n4K resolution\r\n4K UHD TV transcends regular FHD with 4x more pixels, and offers your eyes the sharp and clear images they deserve. Now you can see even the small details in the scene.\r\n\r\nFeel the reality of 4K UHD resolution\r\nSee darkness and light in every scene\r\nHDR\r\nHigh dynamic range increases the light level range of your TV so you can enjoy a huge rainbow of colors and all the visual details, even in the darkest scenes.\r\n\r\n* The viewing experience may vary depending on the content types and format.\r\n\r\n See darkness and light in every scene\r\nThe TV and sound projector blend in perfect harmony\r\nQ-Symphony\r\nSurround yourself with sound from the TV and sound projector that blend in harmoniously. Q-Symphony is unique in that it allows the TV speakers and the sound projector to operate simultaneously, for a better surround effect without muting the TV speakers.", 0, null, 0, "https://img.zap.co.il/pics/8/8/0/7/70817088c.gif", 75.0, 2, 0, "Samsung TV 4K 75", 0, 0, 959, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2911), 5, 0, 0, 0, 0 }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Category", "Color", "Cores", "CpuName", "CpuType", "Description", "Discount", "GpuName", "GpuType", "ImgUrl", "Inch", "Manufacturer", "MilliampHours", "Name", "OperationSystem", "Panel", "Price", "ReleaseDate", "Resolution", "SizeMM", "Storage", "Threads", "Type" },
                values: new object[,]
                {
                    { 43, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/7/7/5/0/74830577c.gif", 0.0, 4, 0, "LG TV 4K 65", 0, 0, 699, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2912), 5, 0, 0, 0, 0 },
                    { 44, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/4/0/2/1/64971204c.gif", 0.0, 4, 0, "Xiaomi Mi TV 4K 43", 0, 0, 499, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2914), 0, 0, 0, 0, 0 },
                    { 45, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/7/2/3/2/70702327c.gif", 0.0, 2, 0, "Samsung TV 4K 50", 0, 0, 529, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2915), 0, 0, 0, 0, 0 },
                    { 46, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/7/4/8/4/74324847c.gif", 0.0, 5, 0, "Sony 4K 75", 0, 0, 1159, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2916), 0, 0, 0, 0, 0 },
                    { 47, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/4/2/6/1/67931624c.gif", 0.0, 2, 0, "Hisense 4K 50", 0, 0, 319, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2917), 0, 0, 0, 0, 0 },
                    { 48, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/6/9/3/2/56802396c.gif", 0.0, 2, 0, "Samsung HD 32", 0, 0, 129, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2918), 0, 0, 0, 0, 0 },
                    { 49, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/6/3/6/3/69943636c.gif", 0.0, 5, 0, "Sony 4K 100", 0, 0, 12259, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2919), 0, 0, 0, 0, 0 },
                    { 50, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/2/6/0/1/69131062c.gif", 0.0, 2, 0, "TCL 4K 98", 0, 0, 4999, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2920), 0, 0, 0, 0, 0 },
                    { 51, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/8/2/0/4/70674028c.gif", 0.0, 2, 0, "Samsung TV 4K 85", 0, 0, 759, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2923), 0, 0, 0, 0, 0 },
                    { 52, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/1/8/5/8/53818581c.gif", 0.0, 2, 0, "Hisense 4K 85", 0, 0, 1999, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2924), 0, 0, 0, 0, 0 },
                    { 53, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/2/1/9/5/67935912c.gif", 0.0, 2, 0, "TCL FullHD 40", 0, 0, 239, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2926), 0, 0, 0, 0, 0 },
                    { 54, 4, 0, 0, null, 0, "", 0, null, 0, "https://img.zap.co.il/pics/5/5/6/9/56109655c.gif", 0.0, 2, 0, "MAG HD 32", 0, 0, 199, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2927), 0, 0, 0, 0, 0 },
                    { 55, 8, 7, 8, null, 5, "MacBook AirPower. It's in the Air.Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.Small chip. Giant leap.It's here. Our first chip designed specifically for Mac. Packed with an astonishing 16 billion transistors, the Apple M1 system on a chip (SoC) integrates the CPU, GPU, Neural Engine, I/O, and so much more onto a single tiny chip. With incredible performance, custom technologies, and industry-leading power efficiency, M1 is not just a next step for Mac - it's another level entirely.CPU8-core CPU Devours tasks. Sips battery.M1 has the fastest CPU we've ever made. With that kind of processing speed, MacBook Air can take on new extraordinarily intensive tasks like professional-quality editing and action-packed gaming. But the 8-core CPU on M1 isn't just up to 3.5x faster than the previous generation - it balances high-performance cores with efficiency cores that can still crush everyday jobs while using just a tenth of the power.All-day battery lifeUp to 18 hours of battery life. That's 6 more hours, free of charge.Thermal efficiency No fan. No noise. Just Air.", 0, null, 0, "http://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0002_438554-Product-0-I-637205827845419382_800x800_66570486-c29a-46f5-9984-c6d6f7446bef.png?v=1618283708", 13.300000000000001, 1, 0, "Macbook Air M1", 6, 6, 899, new DateTime(2020, 11, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, 0, 0, 0, 0 },
                    { 56, 8, 7, 10, null, 6, "The MacBook Pro M1 had a release date of November 17 and starts at $1,299. That configuration gives you Apple’s powerful M1 chip with an 8-core CPU and 8-core GPU, plus 8GB of unified memory (RAM). You get 256GB of storage to start, but the $1,499 model of the MacBook Pro M1 includes 512GB of storage. \r\n\r\nIf you want to configure the MacBook Pro M1 yourself, there are a number of upgrades available. It costs $200 to go from 8GB to 16GB of memory. If you want more than 512GB of storage, 1TB costs an extra $400 while 2TB will run you $800.\r\n\r\nThe MacBook Pro 2021, though looks to seriously improve on the current model. Rumors suggest Apple will bring back MagSafe charging and the SD memory reader, and drop the Touch Bar. All while adding in faster processors and adopting the flat-edge design language of the iPhone 12 and iPad Pro. ", 0, null, 0, "https://telecomtalk.info/wp-content/uploads/2023/02/apple-discontinues-macbook-pro-14-and-16.jpg", 16.0, 1, 0, "Macbook Pro M1", 6, 6, 1299, new DateTime(2020, 11, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, 0, 0, 0, 0 },
                    { 57, 8, 7, 10, null, 8, "MacBook AirPower. It's in the Air.Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.Small chip. Giant leap.It's here. Our first chip designed specifically for Mac. Packed with an astonishing 16 billion transistors, the Apple M1 system on a chip (SoC) integrates the CPU, GPU, Neural Engine, I/O, and so much more onto a single tiny chip. With incredible performance, custom technologies, and industry-leading power efficiency, M1 is not just a next step for Mac - it's another level entirely.CPU8-core CPU Devours tasks. Sips battery.M1 has the fastest CPU we've ever made. With that kind of processing speed, MacBook Air can take on new extraordinarily intensive tasks like professional-quality editing and action-packed gaming. But the 8-core CPU on M1 isn't just up to 3.5x faster than the previous generation - it balances high-performance cores with efficiency cores that can still crush everyday jobs while using just a tenth of the power.All-day battery lifeUp to 18 hours of battery life. That's 6 more hours, free of charge.Thermal efficiency No fan. No noise. Just Air.", 0, null, 0, "https://img.ksp.co.il/item/217286/b_1.jpg?v=5", 14.0, 1, 0, "Macbook Air M2", 6, 6, 999, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, 0, 0, 0, 0 },
                    { 58, 8, 7, 12, null, 8, "The MacBook Pro M2 had a release date of November 17 and starts at $1,299. That configuration gives you Apple’s powerful M1 chip with an 8-core CPU and 8-core GPU, plus 8GB of unified memory (RAM). You get 256GB of storage to start, but the $1,499 model of the MacBook Pro M1 includes 512GB of storage. \r\n\r\nIf you want to configure the MacBook Pro M1 yourself, there are a number of upgrades available. It costs $200 to go from 8GB to 16GB of memory. If you want more than 512GB of storage, 1TB costs an extra $400 while 2TB will run you $800.\r\n\r\nThe MacBook Pro 2021, though looks to seriously improve on the current model. Rumors suggest Apple will bring back MagSafe charging and the SD memory reader, and drop the Touch Bar. All while adding in faster processors and adopting the flat-edge design language of the iPhone 13 and iPad Pro. ", 0, null, 0, "https://img.ksp.co.il/item/243844/b_1.jpg?v=5", 16.0, 1, 0, "Macbook Pro M2", 6, 6, 1499, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, 0, 0, 0, 0 },
                    { 59, 8, 5, 0, null, 3, "The HP Spectre line is second to none when it comes to design, and this latest model is no exception. Like its 13-inch predecessor, the Spectre x360 14 is made of CNC-machined aluminum. Also like its siblings, you can get the 14 in “nightfall black,” “Poseidon blue,” or “natural silver.” Take a look at some pictures before selecting your color because they each have pretty different vibes. The nightfall black option has a sophisticated, svelte aesthetic that looks tailor-made for a boardroom. Poseidon blue is friendlier and probably the one I’d go for myself. \r\n\r\nThe accents, though, are what make the Spectre stand out from the legions of other black laptops out there. Lustrous trim borders the lid, the touchpad, and the deck. The hinges share its color, as does the HP logo on its lid. It’s bold without being obnoxious. The two rear corners are diamond-shaped, and one of them houses a Thunderbolt 4 port on its flat edge. (On the sides live an audio jack, a USB-A, a microSD slot, and an additional Thunderbolt 4, which is a decent selection — gone is the trapdoor that covered the USB-A port on the 13-inch model.) And the edges are all beveled, making the notebook appear thinner than it actually is (it’s 0.67 inches thick). Careful craftsmanship is evident here", 0, null, 0, "https://img.ksp.co.il/item/245647/b_6.jpg?v=5", 0.0, 8, 0, "Spectre x360", 3, 0, 1259, new DateTime(2023, 2, 21, 13, 35, 18, 877, DateTimeKind.Local).AddTicks(2934), 0, 0, 0, 0, 0 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartProducts_CartId",
                table: "CartProducts",
                column: "CartId");

            migrationBuilder.CreateIndex(
                name: "IX_CartProducts_OrderId",
                table: "CartProducts",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_AddressId",
                table: "Orders",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_CreditCardId",
                table: "Orders",
                column: "CreditCardId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "Users",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "Users",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CartProducts");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Carts");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "CreditCards");
        }
    }
}
