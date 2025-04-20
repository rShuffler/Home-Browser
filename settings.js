const path = require('path');

const BASE_DIR = __dirname;
const START_PAGE = path.join(BASE_DIR, 'index.html');

console.log(START_PAGE);

function saveSettings() {
    const theme = document.getElementById("theme-select").value;
    const searchEngine = document.getElementById("search-engine").value;

    localStorage.setItem("theme", theme);
    localStorage.setItem("searchEngine", searchEngine);

    alert("Settings saved!");
}

function goBack() {
    window.location.href = "index.html";
}

function openTab(tabId) {
    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-button");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    document.querySelector(`[onclick="openTab('${tabId}')"]`).classList.add("active");
}

