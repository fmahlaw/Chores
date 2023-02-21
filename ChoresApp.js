"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoresApp = void 0;
const ChoreList_1 = require("./ChoreList");
const ChoresUser_1 = require("./ChoresUser");
const Chore_1 = require("./Chore");
class ChoresApp {
    constructor() {
        this.choreList = new ChoreList_1.ChoreList();
    }
    addUser(userName) {
        const user = new ChoresUser_1.ChoresUser(userName);
        this.choreList.addUser(user);
    }
    addChore(choreName) {
        const chore = new Chore_1.Chore(choreName);
        this.choreList.addChore(chore);
    }
    assignChore(user, chore) {
        this.choreList.assignChore(user, chore);
    }
    unassignChore(user, chore) {
        this.choreList.unassignChore(user, chore);
    }
    getUnassignedChores() {
        return this.choreList.getUnassignedChores();
    }
    getAssignedChores(user) {
        return this.choreList.getAssignedChores(user);
    }
    getUsers() {
        return this.choreList.getUsers();
    }
    getChores() {
        return this.choreList.getChores();
    }
}
exports.ChoresApp = ChoresApp;
