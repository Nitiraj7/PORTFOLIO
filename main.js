/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Designer.","Developer."],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)





// JavaScript for email validation and form submission
// JavaScript for email validation and form submission
var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");
var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail() {
    console.log("Validating email...");
    if (!emailField.value.match(emailPattern)) {
        console.log("Invalid email detected");
        emailError.innerHTML = "Please enter a valid email";
        return false;
    }
    console.log("Email is valid");
    emailError.innerHTML = "";
    return true;
}

function submitForm(event) {
    console.log("Submitting form...");
    event.preventDefault();
    if (validateEmail()) {
        console.log("Email validation passed. Form submitted.");
        document.getElementById("contactForm").submit();
        resetForm(); // Reset the form after submission
    } else {
        console.log("Email validation failed. Form not submitted.");
        // If email is not valid, prevent form submission
    }
}

// Reset the form
function resetForm() {
    document.getElementById("contactForm").reset();
}

// Enable/disable the button based on the input fields' states
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content loaded");
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.getElementById("message");
    const submitBtn = document.getElementById("submitBtn");

    function enableSubmitButton() {
        console.log("Enabling submit button...");
        if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "" && messageInput.value.trim() !== "") {
            console.log("All fields filled. Submit button enabled.");
            submitBtn.removeAttribute("disabled");
        } else {
            console.log("Some fields are empty. Submit button disabled.");
            submitBtn.setAttribute("disabled", "disabled");
        }
    }

    nameInput.addEventListener("input", enableSubmitButton);
    emailInput.addEventListener("input", function() {
        enableSubmitButton();
        validateEmail();
    });
    messageInput.addEventListener("input", enableSubmitButton);

    // Initial check on page load
    enableSubmitButton();
});




