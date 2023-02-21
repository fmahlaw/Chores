"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//the code
const ChoreList_1 = require("./ChoreList");
const ChoresApp_1 = require("./ChoresApp");
const ChoresUser_1 = require("./ChoresUser");
const Chore_1 = require("./Chore");
const app = new ChoresApp_1.ChoresApp();
const choreList = new ChoreList_1.ChoreList();
const userContainer = document.getElementById("users");
const choreContainer = document.getElementById("chores");
const addChoreButton = document.getElementById("add-chore-button");
const addChoreInput = document.getElementById("chore-name");
const addUserButton = document.getElementById("add-user-button");
const addUserInput = document.getElementById("user-name");
const statusContainer = document.getElementById("status");
addChoreButton.addEventListener("click", () => {
    const choreName = addChoreInput.value;
    if (choreName !== "") {
        const chore = new Chore_1.Chore(choreName);
        choreList.addChore(chore);
        app.addChore(choreName);
        addChoreInput.value = "";
        updateChores();
        updateUnassignedChores();
    }
});
addUserButton.addEventListener("click", () => {
    const userName = addUserInput.value;
    if (userName !== "") {
        const user = new ChoresUser_1.ChoresUser(userName);
        app.addUser(userName);
        addUserInput.value = "";
        updateUsers();
    }
});
function updateChores() {
    choreContainer.innerHTML = "";
    const chores = choreList.getChores();
    for (const chore of chores) {
        const li = document.createElement("li");
        li.textContent = chore.getName();
        choreContainer.appendChild(li);
    }
}
function updateUnassignedChores() {
    const unassignedChores = app.getUnassignedChores();
    let message = "";
    if (unassignedChores.length > 0) {
        message = "Unassigned chores: " + unassignedChores.join(", ");
    }
    else {
        message = "No unassigned chores";
    }
    statusContainer.textContent = message;
}
function updateUsers() {
    userContainer.innerHTML = "";
    const users = app.getUsers();
    for (const user of users) {
        const li = document.createElement("li");
        li.textContent = user.name;
        userContainer.appendChild(li);
    }
}
updateChores();
updateUnassignedChores();
updateUsers();
