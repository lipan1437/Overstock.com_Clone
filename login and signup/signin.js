document.querySelector("#linkit").addEventListener("click", function () {
  event.preventDefault();
  window.location.href = "signup.html";
});

let users = JSON.parse(localStorage.getItem("signupData")) || [];
document.querySelector("#Signin-btn").addEventListener("click", mySignIn);
function mySignIn(event) {
  event.preventDefault();
  let data = {
    userEmail: document.querySelector("#email").value,
    userPassword: document.querySelector("#password").value,
  };

  if (checkSignin(data.userEmail, data.userPassword) == true) {
    localStorage.setItem("signinData", JSON.stringify(data));
    alert("sign in successful");
    window.location.href = "index.html";
  } else {
    alert("worng email or password");
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
