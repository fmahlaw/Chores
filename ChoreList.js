"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoreList = void 0;
class ChoreList {
    constructor() {
        this.users = [];
        this.chores = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    addChore(chore) {
        this.chores.push(chore);
    }
    assignChore(user, chore) {
        chore.assign(user);
    }
    unassignChore(user, chore) {
        chore.unassign();
    }
    getUnassignedChores() {
        return this.chores.filter((chore) => !chore.isAssigned());
    }
    getAssignedChores(user) {
        return this.chores.filter((chore) => chore.assignedUser === user);
    }
    getUsers() {
        return this.users;
    }
    getChores() {
        return this.chores;
    }
}
exports.ChoreList = ChoreList;
