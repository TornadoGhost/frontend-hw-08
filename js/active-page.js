//Get current URL
let currentUrl = window.location.href;

//Get the anchor elements of the tabs
let homeTab = document.getElementById("home-tab");
let portfolioTab = document.getElementById("portfolio-tab");
let contanactsTab = document.getElementById("contacts-tab");

//Check if the current URL matches the URL of each tab, and add the "active" class to the corresponding tab
if (currentUrl.includes("index.html")) {
    homeTab.classList.add("is-active");
} else if (currentUrl.includes("portfolio.html")) {
    portfolioTab.classList.add("is-active");
} else if (currentUrl.includes("contacts.html")) {
    contanactsTab.classList.add("is-active");
}