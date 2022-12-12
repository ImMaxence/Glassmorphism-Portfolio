const tabs = document.querySelector(".about_tabs");
const aboutSec = document.querySelector(".about");

tabs.addEventListener("click", (event) => {
    if (event.target.classList.contains("tabs_item") && !event.target.classList.contains("active")) {
        tabs.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const target = event.target.getAttribute("data_target");
        //console.log(target);
        console.log(event.target.classList);
        aboutSec.querySelector(".tabs_content.active").classList.remove("active");
        aboutSec.querySelector(target).classList.add("active");
    }
});