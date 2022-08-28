let navbar_id = document.getElementById("navbar");
import navbar_imp from "../components/navbar.js"
  navbar_id.innerHTML = navbar_imp();

  import { footer, end } from "./components/footer.js";

  document.querySelector("#footer").innerHTML = footer();
  document.querySelector("#end").innerHTML = end()
  /*-----import ends here-------*/


let signUpLS = JSON.parse(localStorage.getItem("signupData")) || [];

document.querySelector("#creat").addEventListener("click", signupFunc);
function signupFunc() {
  let signupObj = {
    Email: document.getElementById("Uemail").value,
    Password: document.getElementById("Upassword").value,
    Check: document.getElementById("Uc_password").value,
  };

  if (signupObj.Email.length > 5 && signupObj.Password.length > 5) {
    alert("Signup Sucessful");
  } else if (signupObj.Password.length < 5) {
    alert("Enter atlest 6 char strong password");
  } else if (signupObj.Password != signupObj.Check) {
    alert("Enter the same password in both");
  }
  signUpLS.push(signupObj);
  localStorage.setItem("signupData", JSON.stringify(signUpLS));
  window.location.reload()
}

// Signinpart start here
let users = JSON.parse(localStorage.getItem("signupData")) || [];
document.querySelector("#signin-btn").addEventListener("click", mySignIn);
function mySignIn(event) {
  event.preventDefault();
  let data = {
    userEmail: document.querySelector("#Iemail").value,
    userPassword: document.querySelector("#Ipassword").value,
  };

  if (checkSignin(data.userEmail, data.userPassword) == true) {
    localStorage.setItem("signinData", JSON.stringify(data));
    alert("sign in successful");
    window.location.href = "./index.html";
  } else if(data.userEmail="") {
    alert("please enter email!");
  }else if(data.userPassword=""){
    alert("please enter password!")
  } else {
    alert("worong email or password")
  }

  function checkSignin(email, password) {
    let filter = users.filter(function (ele) {
      return ele.Email == email && ele.Password == password;
    });
    if (filter.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}