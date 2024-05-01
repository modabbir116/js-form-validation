let input_name = document.getElementById("input_name");
let input_email = document.getElementById("input_email");
let input_pass = document.getElementById("input_pass");
let input_con_pass = document.getElementById("input_con_pass");
let button = document.getElementById("button");

let pass_icon = document.querySelector(".pass_icon i")

let email_regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let password_match =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

let name_error = document.querySelector(".name_error");
let email_error = document.querySelector(".email_error");
let pass_error = document.querySelector(".pass_error");
let con_pass_error = document.querySelector(".con_pass_error");


button.addEventListener("click", function(e){
    e.preventDefault()
    // name part
    if(!input_name.value){
        name_error.innerHTML = "Please Your Name"
        input_name.style.border = "2px solid red"
    }
    else{
        name_error.innerHTML = ""
        input_name.style.border = ""
    }
    // email part
    if(!input_email.value){
        email_error.innerHTML = "Please Your Email"
        input_email.style.border = "2px solid red"
    }
    else{
        if(input_email.value.match(email_regex)){
            email_error.innerHTML = ""
            input_email.style.border = ""
        }
        else{
            email_error.innerHTML = "Email formate not match"
            input_email.style.border = "2px solid red"
        }
    }
    // password 
    if(!input_pass.value){
        pass_error.innerHTML = "please Password"
        input_pass.style.border = "2px solid red"
    }
    else{
        if(input_pass.value.match(password_match)){
            pass_error.innerHTML = ""
            input_pass.style.border = ""
        }
        else{
            pass_error.innerHTML = "Strong Password"
            input_pass.style.border = "2px solid red" 
        }
    }
    // con_pass
    if(!input_con_pass.value){
        con_pass_error.innerHTML = "please confirm Password"
        input_con_pass.style.border = "2px solid red"
    }
    else{
        if(input_pass.value == input_con_pass.value){
            con_pass_error.innerHTML = ""
            input_con_pass.style.border = ""

        }
        else{
            con_pass_error.innerHTML = "Password not Matck"
            input_con_pass.style.border = ""
        }
    }
})


pass_icon.addEventListener("click", ()=>{
    if(!input_pass.value){
        pass_error.innerHTML = "please Password"
        input_pass.style.border = "2px solid red"
    }
    else{
        if (input_pass.type === "password") {
            input_pass.type = "text";
            pass_icon.classList.remove("fa-eye-slash");
            pass_icon.classList.add("fa-eye");
        } else {
            input_pass.type = "password";
            pass_icon.classList.remove("fa-eye");
            pass_icon.classList.add("fa-eye-slash");
        }
    }
})