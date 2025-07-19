// Prevents the page from reloading on submit
const form_signUp = document.getElementById("signup_form");
form_signUp.addEventListener("submit", (e) => {
  e.preventDefault();
});
// Waits for all content to be loaded
document.addEventListener("DOMContentLoaded", () => {
  // LIVE PASSWORD CHECK
  let confirmMessage = document.getElementById("confirmMessage");
  // MAIN PASSWORD INPUT ON SIGN UP PAGE
  let Password_signup_input = document.getElementById("Password_signup");
  // CONFIRM PASSWORD INPUT ON SIGN UP PAGE
  let Password_signup_confirm_input = document.getElementById(
    "Password_signup_confirm"
  );
  // RUN LIVE CHECK
  function checkLivePassword() {
    // ADD GOTTEN VALUE TO LET FOR MAIN PASSWORD INPUT
    let Password_signup_value = Password_signup_input.value;
    //  ADD GOTTEN VALUE TO LET FOR CONFIRM PASSWORD INPUT
    let Password_signup_confirm_value = Password_signup_confirm_input.value;
    // CHECK IF BOTH INPUT ARE EMPTY
    if (Password_signup_value === "" && Password_signup_confirm_value === "") {
      confirmMessage.innerHTML = "";
    }
    // CHECK IF PASSWORD MATCHES
    else if (Password_signup_value === Password_signup_confirm_value) {
      confirmMessage.innerHTML =
        "<i class='fas fa-check-circle'></i> Password Matches";
      confirmMessage.style.color = "green";
    }
    // CHECK IF ONLY ONE INPUT IS FILLED
    else if (Password_signup_value && Password_signup_confirm_value == "") {
      confirmMessage.innerHTML = "";
    }
    // DISPLAY MESSAGE IF PASSWORD DONT MATCH
    else {
      confirmMessage.innerHTML =
        "<i class='fas fa-times-circle'></i> Password does not Match";
      confirmMessage.style.color = "red";
    }
  }
  // LISTEN FOR USER TYPING TO RUN LIVE CHECK
  Password_signup_input.addEventListener("input", () => {
    checkLivePassword();
  });
  Password_signup_confirm_input.addEventListener("input", () => {
    checkLivePassword();
  });
  // LISTEN FOR SUBMIT CLICK
  document.getElementById("signup_btn").addEventListener("click", () => {
    let Password_signup_confirm_value = Password_signup_confirm_input.value;
    var userName = document.getElementById("userName_signup").value;
    var email_signUp = document.getElementById("email_signUp").value;
    var signIn_password = document.getElementById("Password_signup").value;
    var formMessage = document.getElementById("formMessage");
    if (
      !userName ||
      !email_signUp ||
      !signIn_password ||
      signIn_password !== Password_signup_confirm_value ||
      !Password_signup_confirm_value
    ) {
      console.log("ERROR MAKE SURE ALL INPUTS ARE PROPERLY FILLED");
      formMessage.innerHTML = "Ensure all inputs are properly filled";
      formMessage.style.color = "red";
    } else {
      formMessage.innerHTML = "";
      formMessage.style.color = "red";
      let users =JSON.parse(localStorage.getItem("users")) || [];
      users.push({
        userName: userName,
        email_signUp:email_signUp,
        signIn_password: signIn_password
      });
      localStorage.setItem("users", JSON.stringify(users));
      users.forEach(user => {
        console.log("User Name" , user.userName);
        console.log("Password" , user.signIn_password);
        console.log("Email" , user.email_signUp);

      });
      alert("SIGNED UP SUCCESSFULLY");
      window.location.href = "index.html"
    }
  });
});
