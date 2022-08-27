let navbar_id = document.getElementById("navbar");
  import navbar_imp from "./components/navbar.js"
    navbar_id.innerHTML = navbar_imp();

import { footer, end } from "./components/footer.js";

  document.querySelector("#footer").innerHTML = footer();
  document.querySelector("#end").innerHTML = end();
  /*--import ends here-----*/

let product_data = [
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more01_beddingsets.jpg",
    title: "Bedding Set",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more02_comfortersandsets.jpg",
    title: "Comforters and Sets ",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more03_quiltsandbedspreads.jpg",
    title: "Quilts and Bedspreads",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more04_bedsheetsandpillowcases.jpg",
    title: "Bed Sheets and Pillowcases",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more05mattresspadsandtoppers.jpg",
    title: "Matress Pads and Toppers",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more06_bedprotectors.jpg",
    title: "Bed Protectors",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more07_blankets.jpg",
    title: "Blankets",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more08_duvetcoversandsets.jpg",
    title: "Duvet Covers and Sets",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more09_downcomforters.jpg",
    title: "Down Comforters and Dovet Inserts",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more10_bedinabag.jpg",
    title: "Bed-in-a-Bag",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more11_bedpillows.jpg",
    title: "Bed Pillows",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more12_pillowshams.jpg",
    title: "Pillows Shams",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more13_bedskirts.jpg",
    title: "Bed Skirts",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more14_kidsbedding.jpg",
    title: "Kids Bedding",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more15_daybedcoversets.jpg",
    title: "Daybed Cover Sets",
  },

  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more16_newarrivals.jpg",
    title: "Shop New Arrivals",
  },
  {
    image: "https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg",
    title: "Shop All Bedding On Sales ",
  },
];

let dataLS = [];
let displayData = (product_data) => {
  let container = document.getElementById("grid-container");
  product_data.forEach((ele) => {
    let div = document.createElement("div");
    // div.addEventListener("click", () => {
    //   dataLS.push(ele);
    //   localStorage.setItem("furniture", JSON.stringify(dataLS));
    //   // window.location.href = "#";
    // });
    let imag = document.createElement("img");
    imag.src = ele.image;
    let name = document.createElement("p");
    name.innerText = ele.title;

    div.append(imag, name);
    container.append(div);
  });
};
displayData(product_data);
