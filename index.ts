//the code
import {  ChoreList } from "./ChoreList";
import { ChoresApp } from "./ChoresApp";
import { ChoresUser } from "./ChoresUser";
import { Chore } from "./Chore";

const app = new ChoresApp();
const choreList = new ChoreList();
const userContainer = document.getElementById("users") as HTMLUListElement;
const choreContainer = document.getElementById("chores") as HTMLUListElement;
const addChoreButton = document.getElementById("add-chore-button") as HTMLButtonElement;
const addChoreInput = document.getElementById("chore-name") as HTMLInputElement;
const addUserButton = document.getElementById("add-user-button") as HTMLButtonElement;
const addUserInput = document.getElementById("user-name") as HTMLInputElement;
const statusContainer = document.getElementById("status") as HTMLDivElement;

addChoreButton.addEventListener("click", () => {
  const choreName = addChoreInput.value;
  if (choreName !== "") {
    const chore = new Chore(choreName);
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
    const user = new ChoresUser(userName);
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
  } else {
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
