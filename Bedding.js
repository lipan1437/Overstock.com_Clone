let kictchenArr = [
  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_1_SmallAppliances.jpg",
    title: "Small Appliances",
  },
  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_2_Dinnerware.jpg",
    title: "Dinnerware",
  },
  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_KITCHEN_PopCat_3.jpg",
    title: "Cookware",
  },
  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/10122021_KITCHEN_PopCat_3_Mixers.jpg",
    title: " Mixers",
  },
  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_4_CookingEssentials.jpg",
    title: "Cooking Essentials",
  },
  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_5_Serveware.jpg",
    title: "Serveware",
  },
  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_6_Bakeware.jpg",
    title: "Bakeware",
  },
  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-PopCat_7.jpg",
    title: "Ranges & Ovens",
  },

  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_7_TableLinensandDecor.jpg",
    title: "Table Linens & Decor",
  },
  {
    Image:
      "	https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Kitchen_PopCat_7.jpg",
    title: "Flatware",
  },
  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-PopCat_8.jpg",
    title: "Major Appliances",
  },
  {
    Image:
      "https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_8_GlassesandBarware.jpg",
    title: "Glasses & Barware",
  },
];
let kictchenArr2 = [
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular7.jpg",
    title: "Counter Accessories",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular8.jpg",
    title: "Storage Canisters",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular9.jpg",
    title: "Dish Racks",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular10.jpg",
    title: "Trash Cans",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular11.jpg",
    title: "Wine Racks",
  },
  {
    image:
      "	https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular12.jpg",
    title: "Pot Racks",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular13.jpg",
    title: "Islands",
  },
  {
    image:
      "	https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular14.jpg",
    title: "Cabinets",
  },
  {
    image:
      "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular15.jpg",
    title: "Butcher Blocks",
  },
  {
    image: "",
    title: "",
  },
  {
    image: "",
    title: "",
  },
  {
    image: "",
    title: "",
  },
];
console.log(kictchenArr);
let container = document.getElementById("container");
let displayData = (kictchenArr) => {
  kictchenArr.forEach(({ Image, title }) => {
    let imag = document.createElement("img");
    imag.src = Image;
    let name = document.createElement("p");
    name.innerText = title;
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      window.location.href = "#";
    });
    div.append(imag, name);
    container.append(div);
  });
};
displayData(kictchenArr);
