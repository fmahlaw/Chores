import { ChoresUser } from "./ChoresUser";
import { Chore } from "./Chore";

export class ChoreList {
  private users: ChoresUser[];
  private chores: Chore[];

  constructor() {
    this.users = [];
    this.chores = [];
  }

  addUser(user: ChoresUser): void {
    this.users.push(user);
  }

  addChore(chore: Chore): void {
    this.chores.push(chore);
  }

  assignChore(user: ChoresUser, chore: Chore): void {
    chore.assign(user);
  }

  unassignChore(user: ChoresUser, chore: Chore): void {
    chore.unassign();
  }

  getUnassignedChores(): Chore[] {
    return this.chores.filter((chore) => !chore.isAssigned());
  }

  getAssignedChores(user: ChoresUser): Chore[] {
    return this.chores.filter((chore) => chore.assignedUser === user);
  }

  getUsers(): ChoresUser[] {
    return this.users;
  }

  getChores(): Chore[] {
    return this.chores;
  }
}
