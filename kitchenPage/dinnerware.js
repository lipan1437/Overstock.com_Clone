let navbar_id = document.getElementById("navbar");
  import navbar_imp from "./components/navbar.js"
    navbar_id.innerHTML = navbar_imp();

import { footer, end } from "./components/footer.js";

  document.querySelector("#footer").innerHTML = footer();
  document.querySelector("#end").innerHTML = end()


let dinnerWareArr=[
    {
        image:"https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_FirstBMOD1_DinnerwareSets.jpg?imWidth=320&impolicy=medium",
        title:"Dinnerware Sets",
    },
    {
        image:"https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_FirstBMOD2_FineChina.jpg?imWidth=320&impolicy=medium",
        title:"Fine China",
    },
    {
        image:"https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_FirstBMOD3_FormalDinnerware.jpg?imWidth=320&impolicy=medium",
        title:"Formal Dinnerware",
    },
    {
        image:"https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_FirstBMOD4_PlaceSettings.jpg?imWidth=320&impolicy=medium",
        title:"Place Settings",
    },
    {
        image:"	https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_FirstBMOD5_HolidayDinnerware.jpg?imWidth=320&impolicy=medium",
        title:"Holiday Dinnerware",
    },
    {
        image:"https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_FirstBMOD6_OutdoorDinnerware.jpg?imWidth=320&impolicy=medium",
        title:"Outdoor Dinnerware",
    },
    {
        image:"https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_SecondBMOD1_Plates.jpg?imWidth=320&impolicy=medium",
        title:"Plates",
    },
    {
        image:"https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_SecondBMOD2_Bowls.jpg?imWidth=320&impolicy=medium",
        title:"Bowls",
    },
    {
        image:"	https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_SecondBMOD3_Mugs.jpg?imWidth=320&impolicy=medium",
        title:"Mugs",
    },
    {
        image:"https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_SecondBMOD4_ChargerPlates.jpg?imWidth=320&impolicy=medium",
        title:"Charger Plates",
    },
    {
        image:"https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_SecondBMOD5_DiningAccessories.jpg?imWidth=320&impolicy=medium",
        title:"Dining Accessories",
    },
    {
        image:"	https://ak1.ostkcdn.com/img/mxc/11042019_Dinnerware_z_SecondBMOD6_GlasswareandDrinkware.jpg?imWidth=320&impolicy=medium",
        title:"Glasswareand Drinkware",
    },
    
];
let dinnerWareArr1=[
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/486586c95104f5cfddeedf3084d4e55d33b7bd03/Euro-Ceramica-White-Essential-16-Piece-Dinnerware-Set.jpg",
        price:5659.79,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Euro Ceramica White Essential 16 Piece Dinnerware Set (Service for 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/30077055/4-Piece-Tall-Coffee-Mug-Set-Color-84ecee8e-eef1-433b-a822-8066d06bea0a_600.jpg?imwidth=480&impolicy=medium",
        price: 2980,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Japanese-style Tall 18-ounce Assorted Coffee Mugs (Set of 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/a90e168847b157d67246e59b12411cd59a23606f/Stone-Lain-Coupe-Stoneware-Dinnerware-Set.jpg?imwidth=480&impolicy=medium",
        price:6863.92,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Stone Lain Coupe Stoneware Dinnerware Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/573c841ae5737d28b49df8d82d5eedf9b39fdea1/222-Fifth-Adelaide-16-Piece-Porcelain-Dinnerware-Set%2C-Blue.jpg?imwidth=480&impolicy=medium",
        price:9601.09,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"222 Fifth Adelaide 16-Piece Porcelain Dinnerware Set, Blue",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/420cfd0a75d72f751d4ab2aada7301f0c816f2c3/Sango-Siterra-Artist%27s-Blend-16-Piece-Stoneware-Dinnerware-Set.jpg?imwidth=480&impolicy=medium",
        price:6384.28,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Sango Siterra Artist's Blend 16-Piece Stoneware Dinnerware Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/24147651/Dinnerset-16Pcs-White-Stoneware-Ridge-N-A-34edf0a5-33b1-40b7-8b0d-6f46d2de177e_600.jpg?imwidth=480&impolicy=medium",
        price:5263.28,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Dinnerset 16Pcs White Stoneware Ridge",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/671a55a22df258f00d43baeacf0899d1842d5624/Sango-Artist%27s-Blend-Set-Of-4-Dinner-Bowls.jpg?imwidth=480&impolicy=medium",
        price:3359.33,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Sango Artist's Blend Set Of 4 Dinner Bowls",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/24147771/Dinnerset-16Pcs-Embossed-Round-Rim-Pearl-N-A-c398a4af-b8b6-4390-b9ac-b1d03fa74a7c_600.jpg?imwidth=480&impolicy=medium",
        price:6432.70,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Dinnerset 16Pcs Embossed Round Rim Pearl",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/f50769e42b09ac442150f987bfb2ba25045530d7/Sango-Siterra-Artist%27s-Blend-Set-Of-4-Mugs.jpg?imwidth=480&impolicy=medium",
        price:2399.13,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Sango Siterra Artist's Blend Set Of 4 Mugs",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/22595391/Euro-Ceramica-Zanzibar-20-Piece-Stoneware-Dinnerware-Set-Service-for-4-7ff04092-077c-4411-b2fb-32d7ef01b438_600.jpg?imwidth=480&impolicy=medium",
        price:11766.33,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Euro Ceramica Zanzibar 20-piece Stoneware Dinner Set (Service for 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/22595394/Euro-Ceramica-Zanzibar-16-Piece-Stoneware-Dinnerware-Set-Service-for-4-757d3daa-d2fb-4c95-9606-fe0f9e22d6cb_600.jpg?imwidth=480&impolicy=medium",
        price:11146.91,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Euro Ceramica Zanzibar 16 Piece Stoneware Dinnerware Set (Service for 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/30297328/4-Piece-Dessert-Plate-Set-Color-6e1f885d-e240-4d54-9957-9847ea6df570_600.jpg?imwidth=480&impolicy=medium",
        price:2528.86,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"4 Piece Dessert Plate Set - Color",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/27104516/Sango-Resona-Moss-16-Piece-Dinnerware-Set-Service-for-4-5141d12a-48af-4b05-96c5-ae65ed719d2a_600.jpg?imwidth=480&impolicy=medium",
        price:6624.56,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Sango Resona Moss 16 Piece Dinnerware Set, Service for 4",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/28844335/Signature-Housewares-Expressions-Flatware-Storage-Holder-Black-Matte-N-A-149543bc-853e-423b-89e4-864b9b3f61a5_600.jpg?imwidth=480&impolicy=medium",
        price:4367.95,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Signature Housewares Expressions Flatware Storage Holder, Black Matte",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/29099481/Certified-International-Matrix-Gold-Plated-Mugs-Set-of-6-be59a355-9177-4c80-86d2-b4990d913823_600.jpg?imwidth=480&impolicy=medium",
        price:3887.39,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Certified International Matrix Gold Plated Mugs, Set of 6",
    },
   
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/f34d085955c2b7f90cbcd0a06b305461263a1905/Vancasso-Navia-Distressed-Vintage-16-piece-Dinnerware-Set.jpg?imwidth=480&impolicy=medium",
        price:7392.90,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"vancasso Navia 16-piece Stoneware Dinnerware Set (Service for 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/30105255/Red-Vanilla-Countryside-Sugar-and-Cream-Set-on-Tray-818fe852-50bd-46fd-94c0-d1f3df5f9e75_600.jpg?imwidth=480&impolicy=medium",
        price:3311.82,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Red Vanilla Countryside Sugar and Cream Set on Tray",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/f4d4fbd7c18e1b13b2b50d14588d13b43950d4cd/MALACASA-Flora-Porcelain-Dinnerware-Set-%28Service-for-6%29.jpg?imwidth=480&impolicy=medium",
        price:10899.32,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"MALACASA Flora Porcelain Dinnerware Set (Service for 6)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/e9296fbeb0a5173d286951a3891b862fcd84fc4c/222-Fifth-Northwood-Cottage-12-Piece-Dinnerware-Set%2C-Red.jpg?imwidth=480&impolicy=medium",
        price:9576.42,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"222 Fifth Northwood Cottage 12 Piece Dinnerware Set, Red",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/b45e0cbd4044f654dc0614a09156eafbfba55afb/White-Essential-4-Piece-9%22-Pasta-Bowl-Set.jpg?imwidth=480&impolicy=medium",
        price:3024.04,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Euro Ceramica White Essential 4 Piece 9 Pasta Bowl Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/d3bd1a8416b3f2b063862e7cbc076f812bec183e/vancasso-Sesam-16-Piece-Stoneware-Speckled-Dinnerware-Set%2C-Service-for-4.jpg?imwidth=480&impolicy=medium",
        price:8015.98,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"vancasso Sesam 16-Piece Speckled Dinnerware Set, Service for 4",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/24147791/Dinnerset-16Pcs-Coupe-Marble-N-A-aacb507f-7e42-4122-bfa1-f6e811821bb0_600.jpg?imwidth=480&impolicy=medium",
        price:4615.54,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Porcelain 16-piece Marble Dinnerware Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/27587876/Lorren-Home-Trends-16-Piece-Glazed-Dinnerware-Mosaic-Service-for-4-c98e701b-198a-4774-84f9-7cd999eb3273_600.jpg?imwidth=480&impolicy=medium",
        price:8206.92,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Lorren Home Trends 16 Piece Glazed Dinnerware Mosaic (Service for 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/b5dae3f22833fc3b964a3ed5e083a7853cf7b297/MALACASA-Flora-Porcelain-Dinnerware-Set-%28Service-for-6%29.jpg?imwidth=480&impolicy=medium",
        price:9957.39,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"MALACASA Flora Wavy Modern Porcelain Dinnerware Set (Service for 6)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/27159ec52b6f67dbf6ded9679e22079d944ed7d9/Classic-Design-Charger-Plate-%28Set-of-4%29.jpg?imwidth=480&impolicy=medium",
        price:1296.41,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Charger Plates with Classic Design (Set of 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/f483d2b45af44e2955873a86c4f6ad8f20d446fb/vancasso-Stern-16-Piece-Stoneware-Reactive-Glaze-Dinnerware-Set%2C-Service-for-4.jpg?imwidth=480&impolicy=medium",
        price:3935.81,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"vancasso Stern 16-Piece Stoneware Reactive Glaze Dinnerware Set, Service for 4",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/d68bfb8cb7700b46900f73d7c29190b574e49e78/Sango-Siterra-Painters-Palette-Mixed-Set-of-4-Dinner-Bowls%2C-Multicolor.jpg?imwidth=480&impolicy=medium",
        price:3263.40,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Sango Siterra Painters Palette Mixed Set of 4 Dinner Bowls, Multicolor",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/28639211/Certified-International-Holly-and-Ivy-16-piece-Dinnerware-Set-6de5eb48-d3e8-43b9-8d6b-0f6275f809ad_600.jpg?imwidth=480&impolicy=medium",
        price:14402.08,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Certified International Holly and Ivy 16-piece Dinnerware Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/1a3a587cb4f9690a1f3ca5e8ec6904f0d61bddfc/Mikasa-Annabel-Bone-China-40PC-Dinnerware-Set-%28Service-for-8%29.jpg?imwidth=480&impolicy=medium",
        price:2229,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Mikasa Annabel Bone China 40-piece Dinnerware Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/2ab41f20fc0c487d00c9aa863b84c30e4e397758/LOVECASA-16-Piece-Stoneware-Square-Dinnerware-Set%2C-Service-for-4.jpg?imwidth=480&impolicy=medium",
        price:3984.24,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"LOVECASA 16-Piece Stoneware Square Dinnerware Set, Service for 4",
    },

    {
        image:"https://ak1.ostkcdn.com/images/products/10839801/Certified-International-Tunisian-Sunset-10.5-Dinner-Plates-Set-of-4-b50cb674-ee7f-437c-9825-f7601fa8cd8e_600.jpg?imwidth=480&impolicy=medium",
        price:4569,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Certified International - Tunisian Sunset 10.5-inch Dinner Plates (Set of 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/75ae01c2f738ed6c23369a35ef9cb2636dfbab6a/Stone-Lain-Serenity-Speckle-Stoneware-Round-Two-Tone-Dinnerware-Set.jpg?imwidth=480&impolicy=medium",
        price:66245,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Stone Lain Serenity Speckle Stoneware Round Two-tone Dinnerware Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/6d2495022ed2b43e5597e18df3872930b77099bb/vancasso-Bonbon-24-Piece-Dinnerware-Set-%28Service-for-6%29.jpg?imwidth=480&impolicy=medium",
        price:10033,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"vancasso Bonbon 24-Piece Dinnerware Set (Service for 6)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/213ab23cef53d33cb6c5f087c46e94038fc31abe/Euro-Ceramica-Zanzibar-40oz.-Pasta-Bowls-%28Set-of-4%29.jpg?imwidth=480&impolicy=medium",
        price:3743,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Euro Ceramica Zanzibar 40oz. Pasta Bowls (Set of 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/dd4ac5a6cca6e32c4b43cb81bb2a294a2235db3d/vancasso-Natsuki-Porcelain-Dinnerware-Set.jpg?imwidth=480&impolicy=medium",
        price:6958,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"vancasso Natsuki Porcelain Dinnerware Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/18612837/16-Piece-Square-Beaded-Stoneware-Dinnerware-set-by-Lorren-Home-Trends-Red-fb76d4e7-eb96-4c0d-b118-26f90a848119_600.jpg?imwidth=480&impolicy=medium",
        price:6480,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"16 Piece Square Beaded Stoneware Dinnerware by Lorren Home Trends, Red",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/39abac1377af4965bb834a3f949b7165129d9b40/vancasso-Mandala-Bohemian-Porcelain-Dinnerware-Set-%28Service-for-4%29.jpg?imwidth=480&impolicy=medium",
        price:7033,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"vancasso Mandala Bohemian Porcelain Dinnerware Set (Service for 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/24147785/Dinnerset-Round-Rim-16Pcs-Grey-Line-N-A-358a288b-ad3e-4799-a5d9-9ac3365a5914_600.jpg?imwidth=480&impolicy=medium",
        price:4536,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Dinnerset Round Rim 16Pcs - Grey Line",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/e706bf7b83dbf79ab6be2c2ff38adb36cdd111e8/Dinnerset-12PC-Black-%26-White-Sketch.jpg?imwidth=480&impolicy=medium",
        price:4704,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"12-piece Black & White Sketch Dinnerset - 10'5 x 0'5",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/11445032/Certified-International-Valencia-9.25-Soup-Pasta-Bowls-Set-of-4-Assorted-Designs-8ea1d627-24ff-430a-9eb3-ef9932cc564f_600.jpg?imwidth=480&impolicy=medium",
        price:4559,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Certified International Valencia 9.25-inch Soup/Pasta Bowls (Set of 4) Assorted Designs by Certified International",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/cb0923e00a3a25455677efa183bf702077cd7c04/Lavastone-Black-16-Piece-Dinnerware-Set.jpg?imwidth=480&impolicy=medium",
        price:4559,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Lavastone 16-piece Black Stone Dinnerware Set (Service for 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/a902a1d1e80c655d11de6219f5a7c4f87aa11691/HiEnd-Accents-Clearwater-Pines-19-PC-Lodge-Dinnerware-and-Canister-Set.jpg?imwidth=480&impolicy=medium",
        price:3879,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"HiEnd Accents Clearwater Pines 19-pc. Lodge Dinnerware/Canister Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/f7963b78987ea04c48e1bce430b9dc2a33852433/Pfaltzgraff-Adina-Blue-16-pc-Dinnerware-Set-%28Service-for-4%29.jpg?imwidth=480&impolicy=medium",
        price:3879,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Pfaltzgraff Adina Blue 16 pc Dinnerware Set (Service for 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/29043752/222-Fifth-Peacock-Garden-White-16-Piece-Dinnerware-Set-Service-for-4-3c5bb309-cbf3-4245-b942-8fbb6bb1fe82_600.jpg?imwidth=480&impolicy=medium",
        price:9601,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"222 Fifth Peacock Garden 16-Piece Porcelain Dinnerware Set, White",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/21627966/222-Fifth-Adelaide-Grey-16-Piece-Dinnerware-Set-Service-for-4-e0b1aa04-88be-47ed-811e-e35f770eac07_600.jpg?imwidth=480&impolicy=medium",
        price:9601,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"222 Fifth Adelaide Grey 16 Piece Dinnerware Set, Service for 4",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/30093563/4-Piece-Coffee-Mug-Set-Color-feec84de-23c9-48ff-8782-94c2eb8b5ec7_600.jpg?imwidth=480&impolicy=medium",
        price:2781,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"4 Piece Coffee Mug Set - Color",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/6a99e5be044908c945246346d1c9b31b2e24dd51/vancasso-BoHo-Porcelain-Dinnerware-Set-%28Service-for-4%29.jpg?imwidth=480&impolicy=medium",
        price:7690,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Vancasso Boho Porcelain 16-piece Dinnerware Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/1431e8e671b913337415aa809f9c38e39fba04d5/Sango-Talia-Dusk-Blue-Stoneware-16-piece-Dinnerware-Set.jpg?imwidth=480&impolicy=medium",
        price:6854,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Sango Talia Dusk Blue Stoneware 16-piece Dinnerware Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/0ea69a3300ad467a1cc7d4c0f0681325e83ded8b/vancasso-Arco-18-Piece-Stoneware-Multicolor-Dinnerware-Set-%28Service-For-6%29.jpg?imwidth=480&impolicy=medium",
        price:3412,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"vancasso Arco 18-Piece Multicolor Dinnerware Set (Service For 6)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/e2704d97a8a90c3c2b8fe53fd8a5a694320c54ce/vancasso-Albero-18-Piece-Stoneware-Bark-Glaze-Dinnerware-Set-%28Service-For-6%29.jpg?imwidth=480&impolicy=medium",
        price:8283,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"vancasso Albero 18-Piece Stoneware Bark Glaze Dinnerware Set (Service For 6)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/9345240f8aca91513bacd660d90232d09390ffcb/MALACASA-Elisa-Basic-Porcelain-Dinnerware-Set-%28Service-for-6%29.jpg?imwidth=480&impolicy=medium",
        price:5711,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"MALACASA Elisa Basic Porcelain Dinnerware Set (Service for 6)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/c381fa5bcaba681600bee1027804a0a7e66c4157/Siterra-Painter%27s-Palette-16-Piece-Dinnerware-Set.jpg?imwidth=480&impolicy=medium",
        price:5711,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Sango Siterra Painter's Palette 16-Piece Stoneware Dinnerware Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/d6324d3b261996fd14666dd41744593c267f05a6/Dinnerset-16PC-Coupe-Gold-Marble.jpg?imwidth=480&impolicy=medium",
        price:4622,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Safdie & Co. 16-piece Marbled Grey and Gold Porcelain Dinnerware Set - 10'5 x 0'5",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/28964939/Mikasa-Delray-16-Piece-Dinnerware-Set-1aaed73f-9fca-4839-90db-9d8f17b0e8d4_600.jpg?imwidth=480&impolicy=medium",
        price:9984,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Mikasa Delray Bone China 16-Piece Dinnerware Set (Service for 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/30098697/Juvale-48-Pack-Vintage-Floral-Paper-Insulated-Coffee-Cups-with-Lids-4-Designs-ea373bb6-9516-48a7-aa51-1174e0c4b6fc_600.jpg?imwidth=480&impolicy=medium",
        price:2687,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Juvale 48 Pack Vintage Floral Paper Insulated Coffee Cups with Lids, 4 Designs",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/10839803/Certified-International-Tunisian-Sunset-8.75-Salad-Dessert-Plates-Set-of-4-87b4152a-932f-4efe-88d4-957c8f0058f1_600.jpg?imwidth=480&impolicy=medium",
        price:4012,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Certified International 8.75 Salad/Dessert Plates (Set of 4)",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/d21604f78d4e6c117e94c50d1a05103cfbc9db89/Certified-International-Autumn-Havest-16-Piece-Dinnerware-Set%2C-Service-for-4.jpg?imwidth=480&impolicy=medium",
        price:11363,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Certified International Autumn Havest 16-Piece Dinnerware Set, Service for 4",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/43ee41bfdddab4d55dd1cd8226dbf36440300cf1/vancasso-Navia-Stoneware-8-inch-Soup-Bowl-Dinnerware-Set-24-Oz..jpg?imwidth=480&impolicy=medium",
        price:4189,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"vancasso Navia 24 oz. Pasta Bowl Set of 4",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/7b491812276e6d3680fb6de661c656d496e34dda/Elama-Arthur-16-Piece-Stoneware-Dinnerware-Set-in-Matte-White-with-Gold-Rim.jpg?imwidth=480&impolicy=medium",
        price:6521,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Elama Arthur 16 Piece Stoneware Dinnerware Set in Matte White with Gold Rim - 16 Piece Set",
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/f41d0d2c26339f6f21a3e15c17abd1261480d615/Elama-Tahitian-Diamond-16-Piece-Stoneware-Dinnerware-Set-in-Slate.jpg?imwidth=480&impolicy=medium",
        price:5376,
        rating:"https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png",
        title:"Elama Tahitian Diamond 16 Piece Stoneware Dinnerware Set in Slate",
    },
]
console.log(dinnerWareArr1)
let container2=document.getElementById("container2");
let displayData=( dinnerWareArr)=>{
    dinnerWareArr.forEach(({image,title})=>{
        let imag=document.createElement("img");
        imag.src=image;
        let name=document.createElement("p");
        name.innerText=title;
        let div=document.createElement("div");
        div.addEventListener("click",()=>{
            window.location.href="#";
        });
        let sale=document.createElement("div");
        sale.innerText="Sale";
        sale.setAttribute("class","sale_call_out")
        div.append(imag,name,sale);
        container2.append(div);
    });
}
displayData(dinnerWareArr);

let lsdata=[]

let container3=document.getElementById("container3");
let displayData1=()=>{
    container3.innerHTML=""
    dinnerWareArr1.forEach((el)=>{
        let imag=document.createElement("img");
        imag.src=el.image;
        let pri=document.createElement("h3");
        let price=el.price
        pri.innerText= `₹ ${price}`;
        let ratstar=document.createElement("img");
        ratstar.src=el.rating;
        ratstar.style.width="80px"
        // let rating1=document.createComment("p");
        // rating1.innerText=numrating;
        let name=document.createElement("p");
        name.innerText= el.title;
        let div=document.createElement("div");
        div.addEventListener("click",()=>{
            addCart(el)
        });
        function addCart(ele){
            lsdata.push(ele)
            localStorage.setItem("furniture",JSON.stringify(lsdata))
            window.location.href="./single.html";
        }
        div.append(imag,pri,ratstar,name);
        container3.append(div);
    });
}
displayData1();

function filter_page(ele) {
    console.log(ele);
   // let filter_data = ele.price;
   let filter = document.getElementById("filter-product").value;
   if (filter === "LH") {
     ele.sort(function (a, b) {
       return a.price - b.price; //accending order
     });
     displayData1(ele);
   } else if (filter === "HL") {
     ele.sort(function (a, b) {
       return b.price - a.price; //accending order
     });
     displayData1(ele);
   }
 }
//  filter_page(ele)

// document.querySelector("#sortlh").addEventListener("onchange", showlowtohigh)
// function showlowtohigh(){
//     console.log(dinnerWareArr1)
//         dinnerWareArr1.sort(function(a,b){
//           if(a.price<b.price) return -1
//          if(a.price>b.price) return 1
//          return 0;
         
//         })
//         document.querySelector("#container3").innerHTML=null
//     displayData1()
//    // console.log(dinnerWareArr1)
// }
// document.querySelector("#sorthl").addEventListener("onchange", showhightolow)
// function showhightolow(){
    
//         dinnerWareArr1.sort(function(a,b){
//           if(a.price>b.price) return -1
//          if(a.price<b.price) return 1
//          return 0;
        
//         })
//         document.querySelector("#container3").innerHTML=null
//     displayData1()
// }




