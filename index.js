const tabs = document.querySelector(".about_tabs");
const aboutSec = document.querySelector(".about");

tabs.addEventListener("click", (event) => {
    if (event.target.classList.contains("tabs_item") && !event.target.classList.contains("active")) {
        tabs.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const target = event.target.getAttribute("data_target");
        console.log(event.target.classList);
        aboutSec.querySelector(".tabs_content.active").classList.remove("active");
        aboutSec.querySelector(target).classList.add("active");
    }
});

function popup() {
    document.querySelector(".popup").classList.toggle("open");
    document.body.classList.toggle("hide_scroll")
    document.querySelector(".main").classList.toggle("fade_out");
};

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("view_proj")) {
        popup();
        document.querySelector(".portfolio").scrollTo(0.0);
        detail(event.target.parentElement);
    }
});

function detail(port_item) {
    document.querySelector(".pp_thum img").src =
        port_item.querySelector(".portfolio_thumb img").src;

    document.querySelector(".pp_header h3").innerHTML =
        port_item.querySelector(".port_title").innerHTML;

    document.querySelector(".pp_body").innerHTML =
        port_item.querySelector(".detail_proj").innerHTML;
};

document.querySelector(".pp_close").addEventListener("click", popup);

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("pp_inner")) {
        popup();
    }
});