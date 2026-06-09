const themeBtn = document.getElementById("themeBtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links a");
const timelineBtns = document.querySelectorAll(".timeline-btn");
const nameText = "MARY JOY LAYUPAN";
const typingName = document.getElementById("typingName");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.textContent = "✕";
    }else{
        menuToggle.textContent = "☰";
    }

});



links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


timelineBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.parentElement.classList.toggle("active");

    });

});


let index = 0;

function typeName() {

    if(index < nameText.length){

        typingName.textContent += nameText.charAt(index);

        index++;

        setTimeout(typeName, 120);

    }else{

        document.querySelector(".cursor").style.display = "none";

    }

}

window.addEventListener("load", typeName);
window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        document.querySelector(".navbar")
        .classList.add("scrolled");
    }else{
        document.querySelector(".navbar")
        .classList.remove("scrolled");
    }

});
