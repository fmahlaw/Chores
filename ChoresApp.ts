import {  ChoreList } from "./ChoreList";
import { ChoresUser } from "./ChoresUser";
import { Chore } from "./Chore";

export class ChoresApp {
  private choreList: ChoreList;

  constructor() {
    this.choreList = new ChoreList();
  }

  addUser(userName: string): void {
    const user = new ChoresUser(userName);
    this.choreList.addUser(user);
  }

  addChore(choreName: string): void {
    const chore = new Chore(choreName);
    this.choreList.addChore(chore);
  }

  assignChore(user: ChoresUser, chore: Chore): void {
    this.choreList.assignChore(user, chore);
  }

  unassignChore(user: ChoresUser, chore: Chore): void {
    this.choreList.unassignChore(user, chore);
  }

  getUnassignedChores(): Chore[] {
    return this.choreList.getUnassignedChores();
  }

  getAssignedChores(user: ChoresUser): Chore[] {
    return this.choreList.getAssignedChores(user);
  }

  getUsers(): ChoresUser[] {
    return this.choreList.getUsers();
  }

  getChores(): Chore[] {
    return this.choreList.getChores();
  }
}