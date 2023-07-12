// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }

    else{
        nav.classList.remove("header-scrolled")
    }
}

// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Form


// Function Send Email..
// First we need to setup SMTP Server for that we use SmtpJS.com website



/*

        const form = document.querySelector('.contact_form');

        let  Firstname = document.querySelector('.firstName').value;
        console.log(Firstname);

        let  Lastname = document.querySelector('.lastName').value;
        console.log(Lastname);

        let  phone = document.querySelector('.phone').value;
        console.log(phone);

        let  email = document.querySelector('.email').value;
        console.log(email);

        let message = document.querySelector('.msg').value;
        console.log(message);
  */













