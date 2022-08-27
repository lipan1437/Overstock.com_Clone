let navbarID = document.getElementById("navbar");
import navbar_imp from "./components/navbar.js";
navbarID.innerHTML = navbar_imp();

let dataLS = [];
let container = document.getElementById("container");
let displayData = (data) => {
  data.forEach((ele) => {
    let imag = document.createElement("img");
    imag.src = ele.Image;
    let name = document.createElement("p");
    name.innerText = ele.title;
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      dataLS.push(ele);
      localStorage.setItem("furniture", JSON.stringify(dataLS));
      // window.location.href = "#";
    });
    div.append(imag, name);
    container.append(div);
  });
};

let data = [
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/5aba8acb72afc85dbe29c44646d733ebfc1f957e/Maple-Quilt-Set.jpg?imwidth=480",
    url: "https://www.overstock.com/Bedding-Bath/Maple-Quilt-Set/33912155/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&osp=true&lyceumGuid=4b468885-f385-4fd6-879a-303e627eb1f7&searchidx=0",
    selection2: "Maple Quilt Set",
    selection2_url:
      "https://www.overstock.com/Bedding-Bath/Maple-Quilt-Set/33912155/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&osp=true&lyceumGuid=4b468885-f385-4fd6-879a-303e627eb1f7&searchidx=0",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/28117201/L33216692.jpg?imwidth=480",
    url: "https://www.overstock.com/Bedding-Bath/Kasentex-Luxury-Reversible-Quilt-Set-with-Contemporary-Horizontal-Chevron-Design-Microfiber-Soft-Bedding/28117201/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&osp=true&lyceumGuid=4b468885-f385-4fd6-879a-303e627eb1f7&searchidx=1",
    selection2:
      "Kasentex Reversible Quilt Set Chevron Design, Microfiber Soft Bedding with Shams",
    selection2_url:
      "https://www.overstock.com/Bedding-Bath/Kasentex-Luxury-Reversible-Quilt-Set-with-Contemporary-Horizontal-Chevron-Design-Microfiber-Soft-Bedding/28117201/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&osp=true&lyceumGuid=4b468885-f385-4fd6-879a-303e627eb1f7&searchidx=1",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/980c7080b89f62fb4b4a21a6c1c5dbd1b568f221/Beach-Club-Reversible-Ultra-Soft-Microfiber-Quilt-Set.jpg?imwidth=480",
    url: "https://www.overstock.com/Bedding-Bath/Beach-Club-Reversible-Ultra-Soft-Microfiber-Quilt-Set/31124959/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&osp=true&lyceumGuid=4b468885-f385-4fd6-879a-303e627eb1f7&searchidx=2",
    selection2: "Beach Club Coastal Reversible Ultra-Soft Microfiber Quilt Set",
    selection2_url:
      "https://www.overstock.com/Bedding-Bath/Beach-Club-Reversible-Ultra-Soft-Microfiber-Quilt-Set/31124959/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&osp=true&lyceumGuid=4b468885-f385-4fd6-879a-303e627eb1f7&searchidx=2",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/29b74603c736db047917c61add269c485e416506/Lugano-Honeycomb-Velvet-Oversized-Solid-Quilt-Set.jpg?imwidth=480",
    url: "https://www.overstock.com/Bedding-Bath/Lugano-Honeycomb-Velvet-Oversized-Solid-Quilt-Set/31503528/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&searchidx=3",
    selection2: "Lugano Honeycomb Velvet Oversized Solid Quilt Set",
    selection2_url:
      "https://www.overstock.com/Bedding-Bath/Lugano-Honeycomb-Velvet-Oversized-Solid-Quilt-Set/31503528/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&searchidx=3",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/8c033f3d3d4d203edb7b6ae4c4d17c8423ea6178/Serenta-9-pc.-Cal-King-Printed-Striped-Cotton-Blend-Bed-Coverlet-Set.jpg?imwidth=480",
    url: "https://www.overstock.com/Bedding-Bath/Serenta-9-Piece-Printed-Striped-Cotton-Blend-Bedspread-Coverlet-Set/24251644/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&searchidx=4",
    selection2:
      "Serenta 9-pc. Cal King Printed Striped Cotton Blend Bed Coverlet Set",
    selection2_url:
      "https://www.overstock.com/Bedding-Bath/Serenta-9-Piece-Printed-Striped-Cotton-Blend-Bedspread-Coverlet-Set/24251644/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&searchidx=4",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/431e28446ec716a2c5198cc39a610823a70fca8c/MarCielo-3-Piece-Printed-Quilt-Set-Lightweight-Bedspread-Set-By014.jpg?imwidth=480",
    url: "https://www.overstock.com/Bedding-Bath/MarCielo-3-Piece-Printed-Quilt-Set-Lightweight-Bedspread-Set-By014/32906232/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&searchidx=5",
    selection2: "MarCielo 3-piece Printed Lightweight Bedspread Set",
    selection2_url:
      "https://www.overstock.com/Bedding-Bath/MarCielo-3-Piece-Printed-Quilt-Set-Lightweight-Bedspread-Set-By014/32906232/product.html?refccid=CXARMMVMFG32DB2JY6DO3AM7N4&searchidx=5",
  },
];
console.log(data);
