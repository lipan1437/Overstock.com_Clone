let signUpLS = JSON.parse(localStorage.getItem("signupData")) || [];

document.querySelector("#creat").addEventListener("click", signupFunc);
function signupFunc() {
  let signupObj = {
    Email: document.getElementById("Uemail").value,
    Password: document.getElementById("Upassword").value,
    Check: document.getElementById("Uc_password").value,
  };

  if (signupObj.Email.length > 0 && signupObj.Password.length > 0) {
    alert("Signup Sucessful");
  } else if (signupObj.Password.length < 5) {
    alert("Enter atlest 6 char strong password");
  } else if (signupObj.Password != signupObj.Check) {
    alert("Enter the samne password in both");
  }
  signUpLS.push(signupObj);
  localStorage.setItem("signupData", JSON.stringify(signUpLS));
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
    window.location.href = "#";
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
