
document.addEventListener("DOMContentLoaded", () => {
 
    var loginBtn = document.getElementById("login_btn");
    loginBtn.addEventListener("click" , ()=>{
        var email_login = document.getElementById("email_login").value;
        var password_login = document.getElementById("password_login").value;
        // let remember_me = document.getElementById("rememberMe").value;
    
     localStorage.setItem("email_saved" , email_login);
    localStorage.setItem("password_saved" , password_login);
        const emailSaved = localStorage.getItem("email_saved");
        const passwordSaved = localStorage.getItem("password_saved");
      let users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.length === 0){
        alert("no users found please sign up first");
        window.location.href = "signUp.html"
      }
      else{
           var foundUsers = users.find(user => user.email_signUp === emailSaved && user.signIn_password === passwordSaved);
           if  (foundUsers) {
             alert("LOGIN SUCESSFUL");
             localStorage.setItem("currentUser", foundUsers.userName);
             localStorage.setItem("currentUserPassword", foundUsers.signIn_password);
             localStorage.setItem("currentUserEmail", foundUsers.email_signUp);
             window.location.href="dashboard.html"
           }
           else if(users.find(user => user.email_signUp !== emailSaved && user.signIn_password !== passwordSaved)){
            alert("No information found please sign up");
            window.location.href = "signUp.html"
           }
           else{
            alert("wrong password or email")
           }
      }
    })
});