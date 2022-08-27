let navbar = document.getElementById("navbar");
import navbar_imp from "../components/navbar.js";
navbar.innerHTML = navbar_imp();

let foot = document.getElementById("footer");
import { footer, end } from "../components/footer.js";
foot.innerHTML = footer();

let end_div = document.getElementById("end");
end_div.innerHTML = end();
 

let lsData = JSON.parse(localStorage.getItem('furniture')) || []
let main = document.getElementById('show')
let price = document.getElementById('price')
let show = (data) => { 
  lsData.innerHTML=null ;   
    data.forEach((el)=>{
        let div = document.createElement('div')
        let img  = document.createElement('img')
        img.src = el.image ;
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
show(lsData);

document.getElementById("addtoCart").addEventListener("click", ()=>{
  addtoCart()
})

  let arr=[]
 let addtoCart= () => {
   let purchase = document.getElementById("addtoCart")
     arr.push(purchase)
   localStorage.setItem('cartItems',JSON.stringify(arr))
  window.location.href="../cart/cart.html"
 }