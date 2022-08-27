let navbar = document.getElementById("navbar");
import navbar_imp from "../components/navbar.js";
navbar.innerHTML = navbar_imp();

let foot = document.getElementById("footer");
import { footer, end } from "../components/footer.js";
foot.innerHTML = footer();

let end_div = document.getElementById("end");
end_div.innerHTML = end();


let kitenData = [

      {
       Image:"https://ak1.ostkcdn.com/images/products/is/images/direct/573c841ae5737d28b49df8d82d5eedf9b39fdea1/222-Fifth-Adelaide-16-Piece-Porcelain-Dinnerware-Set%2C-Blue.jpg?imwidth=480&impolicy=medium",
        price:"9601",
        title:"222 Fifth Adelaide 16-Piece Porcelain Dinnerware Set, Blue"
      },
]    

let lsData = JSON.parse(localStorage.getItem('furniture')) || []
let main = document.getElementById('show')
let price = document.getElementById('price')
let show = (data) => {    
    data.forEach((el)=>{
        let div = document.createElement('div')
        let img  = document.createElement('img')
        img.src = el.Image ;
        let h3 = document.createElement('h3')
        h3.innerText=el.title ;
        let p = document.createElement('p')
        p.innerText =`Starting at INR ${el.price}`;
        p.style.color = "red"
        div.append(img)
        main.append(div) 
        price.append(h3,p)
    })
}
show(kitenData)

  let arr=[]
 let addtoCart = () => {
   let purchase = document.getElementById("addtoCart")
     arr.push(purchase)
   localStorage.setItem('cartItems',JSON.stringify(arr))
  window.location.href="./cart.html"
 }