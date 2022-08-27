document
  .querySelector("#btn-2 button+button")
  .addEventListener("click", function () {
    event.preventDefault();
    window.location.href = "signin.html";
  });

let signUpLS = JSON.parse(localStorage.getItem("signupData")) || [];

document.querySelector("#btn-Up").addEventListener("click", signupFunc);
function signupFunc() {
  let signupObj = {
    Email: document.querySelector("#email").value,
    Password: document.querySelector("#password").value,
    Checkbox: document.querySelector("#checkbox").value,
  };
  if (signupObj.Password.length < 5) {
    alert("Enter atlest 6 char strong password");
  } else if (signupObj.Email.length > 0 && signupObj.Password.length > 0) {
    alert("Signup Sucessful");
    window.location.href = "signin.html";
  } else {
    alert("Enter the email");
  }
  signUpLS.push(signupObj);
  localStorage.setItem("signupData", JSON.stringify(signUpLS));
}
