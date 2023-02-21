"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chore = void 0;
class Chore {
    getName() {
        throw new Error("Method not implemented.");
    }
    constructor(name) {
        this.name = name;
        this.assignedUser = null;
    }
    assign(user) {
        this.assignedUser = user;
    }
    unassign() {
        this.assignedUser = null;
    }
    isAssigned() {
        return this.assignedUser !== null;
    }
    getAssignedUserName() {
        return this.assignedUser ? this.assignedUser.name : "";
    }
}
exports.Chore = Chore;
