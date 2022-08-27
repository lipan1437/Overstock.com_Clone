let navbar = document.getElementById("navbar");
import navbar_imp from "../components/navbar.js";
navbar.innerHTML = navbar_imp();

let foot = document.getElementById("footer");
import { footer, end } from "../components/footer.js";
foot.innerHTML = footer();

let end_div = document.getElementById("end");
end_div.innerHTML = end();

let limitedTimeDeals = [
  {
    url: "https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_1.svg?imwidth=1920",
    text: "select rugs",
  },

  {
    url: "https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_2.svg?imwidth=1920",
    text: "select outdoors",
  },

  {
    url: "https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_3.svg?imwidth=1920",
    text: "select furniture",
  },

  {
    url: "https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_4.svg?imwidth=1920",
    text: "select home decor",
  },

  {
    url: "https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_5.svg?imwidth=1920",
    text: "select bedding",
  },

  {
    url: "https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_6.svg?imwidth=1920",
    text: "select lighting",
  },
];
let append = (data) => {
  let main = document.getElementById("main");
  data.forEach((el) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.url;
    let h3 = document.createElement("h3");
    h3.innerText = el.text;
    div.append(img, h3);
    main.append(div);
  });
};
append(limitedTimeDeals);

let freshFinds = [
  {
    url: "https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",
    text: "Furniture",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",
    text: "Area Rugs",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",
    text: "Bedding",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",
    text: "Home Decor",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",
    text: "Window Treatments",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",
    text: "Kitchen",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920",
    text: "Outdoor",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",
    text: "Home Improvement",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",
    text: "Storage",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",
    text: "Mattresses",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",
    text: "Lighting",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",
    text: "Shop All Deals",
  },
];
let append2 = (data) => {
  let freshFind = document.getElementById("freshFind");
  data.forEach((el) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.url;
    let p = document.createElement("p");
    p.innerText = el.text;
    div.append(img, p);
    freshFind.append(div);
  });
};
append2(freshFinds);

let overStock = [
  {
    url: "https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_34762650.jpg?imwidth=1920",
    discount: "Extra 20% off",
    catagory: "Select Rugs by Artistic Weavers*",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_35950863.jpg?imwidth=1920",
    discount: "Extra 20% off",
    catagory: "Select Rugs by Balta*",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/26986507_C_Mod.jpg?imwidth=1920",
    discount: "Extra 10% off",
    catagory: "Select Furniture by Ashley Furniture*",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_34762650.jpg?imwidth=1920",
    discount: "Save On",
    catagory: "Select Home Goods by Bus Furniture*",
  },
];

let append3 = (data) => {
  let overStock = document.getElementById("overStock");
  data.forEach((el) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.url;
    let h4 = document.createElement("h4");
    h4.innerText = el.discount;
    let p = document.createElement("p");
    p.innerText = el.catagory;
    div.append(img, h4, p);
    overStock.append(div);
  });
};
append3(overStock);

let style = [
  {
    url: "https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920",
    title: "Traditional",
    desciption:
      "Cozy designs, clean and classic, give the style it's signature appeal.",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/030822-SBS-MidCenMod.jpg?imwidth=1920",
    title: "Mid-Century Modern",
    desciption:
      "Retro meets modren chic in these clean lines and vibrant tones.",
  },
  {
    url: "https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920",
    title: "Farmhouse",
    desciption:
      "Country comforts abound in this fresh take on rustiuc home decor.",
  },
];
let append4 = (data) => {
  let style = document.getElementById("style");
  data.forEach((el) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    h2.innerText = el.title;
    let p = document.createElement("p");
    p.innerText = el.desciption;
    img.src = el.url;
    div.append(img, h2, p);
    style.append(div);
  });
};
append4(style);

let treadingData = [
  {
    title: "Outdoor Rugs",
  },
  {
    title: "Wallpaper",
  },
  {
    title: "Patio Furniture",
  },
  {
    title: "Mattresses",
  },
  {
    title: "Tv Stands",
  },
  {
    title: "Outdoor Lighting",
  },
  {
    title: "Outdoor Dining Sets",
  },
  {
    title: "Mirrors",
  },
  {
    title: "Portable Air Conditioners",
  },
  {
    title: "Bathroom Vanities",
  },
  {
    title: "Computers Desks",
  },
  {
    title: "Area Rugs",
  },
];

let append5 = (data) => {
  let treding = document.getElementById("treding");
  data.forEach((el) => {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText = el.title;
    div.append(h2);
    treding.append(div);
  });
};
append5(treadingData);
