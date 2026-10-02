// ===============================
// CREATE AGENT MODAL
// ===============================

const createAgentBtn = document.getElementById("createAgentBtn");
const agentModal = document.getElementById("agentModal");
const closeModal = document.getElementById("closeModal");
const saveAgent = document.getElementById("saveAgent");
const agentName = document.getElementById("agentName");


// Open modal
createAgentBtn.addEventListener("click", () => {
    agentModal.classList.add("show");
    agentName.focus();
});


// Close modal
closeModal.addEventListener("click", () => {
    agentModal.classList.remove("show");
});


// Close when clicking outside modal
agentModal.addEventListener("click", (event) => {

    if (event.target === agentModal) {
        agentModal.classList.remove("show");
    }

});


// Create agent
saveAgent.addEventListener("click", () => {

    const name = agentName.value.trim();

    if (name === "") {
        alert("Please enter an agent name.");
        return;
    }

    alert(`Agent "${name}" created successfully!`);

    agentName.value = "";
    agentModal.classList.remove("show");

});


// ===============================
// DARK MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "☾";
        localStorage.setItem("theme", "light");
    }

});


// Remember theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀";
}


// ===============================
// PERFORMANCE FILTER
// ===============================

const performanceFilter =
    document.getElementById("performanceFilter");

performanceFilter.addEventListener("change", () => {

    const selected = performanceFilter.value;

    console.log("Selected period:", selected);

});


// ===============================
// NAVIGATION
// ===============================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ===============================
// QUICK ACTION - CREATE TASK
// ===============================

const newTaskBtn = document.getElementById("newTaskBtn");

newTaskBtn.addEventListener("click", () => {

    alert("Create Task interface opened.");

});


// ===============================
// VIEW ALL
// ===============================

const viewBtn = document.querySelector(".view-btn");

viewBtn.addEventListener("click", () => {

    alert("Opening all tasks...");

});


// ===============================
// NOTIFICATION
// ===============================

const notificationBtn =
    document.querySelector(".notification-btn");

notificationBtn.addEventListener("click", () => {

    alert(
        "Notifications\n\n" +
        "• Data Processing Agent is running\n" +
        "• Market Research Agent completed\n" +
        "• Email Agent failed"
    );

});


// ===============================
// KEYBOARD SHORTCUT
// ===============================

document.addEventListener("keydown", (event) => {

    // Press N to create a new agent
    if (event.key.toLowerCase() === "n") {
        agentModal.classList.add("show");
        agentName.focus();
    }

    // Press Escape to close modal
    if (event.key === "Escape") {
        agentModal.classList.remove("show");
    }

});