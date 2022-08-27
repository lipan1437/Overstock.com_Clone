let navbar_id = document.getElementById("navbar");
import navbar_imp from "../components/navbar.js"
  navbar_id.innerHTML = navbar_imp();

/* ------ navbar ends -------*/


let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
let left_div = document.getElementById("left_div");
let right_div = document.getElementById("right_div");

function display(cart) {
    left_div.innerHTML = "";
    cart.map(function (el, index) {
        let div = document.createElement("div");
        let div1 = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.title;
        name.id = "name"

        let price = document.createElement("h2");
        price.innerText = `Sale INR ${el.price}`;
        price.style.color = "rgb(172,27,37)"
        price.style.marginleft_div = "30px"


        let remove = document.createElement("u");
        remove.innerText = "Remove";
        remove.id = "remove";
        remove.addEventListener("click", function () {
            removeItem(index);
        })

        div1.append(name, price, remove);
        div.append(image, div1);

        left_div.append(div);
        console.log(el);
    })
}
display(cart);
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    display(cart);
    displayTotal();
}

function displayTotal() {
    right_div.innerHTML = "";
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += Number(cart[i].price);
    }

    console.log(total);
    let show = document.createElement("h2");
    show.innerText = `Your Total: INR ${total}`;
    show.id = "showTotal"

    let checkOut = document.createElement("button");
    checkOut.id = "check_out";
    checkOut.innerText = "Check Out";


    checkOut.addEventListener("click", function () {
        // window.location.href="checkout.html";
        checkout()
    });


    right_div.append(show, checkOut);
}

let token = (localStorage.getItem("token"));

function checkout() {
        window.location.href = "./checkout.html";
}

displayTotal();