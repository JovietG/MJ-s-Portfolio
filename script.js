const themeBtn = document.getElementById("themeBtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links a");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }

});


menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
