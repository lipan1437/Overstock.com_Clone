let userdata = JSON.parse(localStorage.getItem("signupData")) || [];
function Setdata() {
  // event.preventDefault();
  console.log("working");
  let email = document.getElementById("Uemail").value;
  let password = document.getElementById("Upassword").value;
  let check = document.getElementById("Uc_password").value;
  if (password !== check) {
    alert("Enter the correct password in Confirm password");
  } else {
    let obj = {};
  }
}
Setdata();
