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
