import { ChoresUser } from "./ChoresUser";

export class Chore {
  getName(): string | null {
      throw new Error("Method not implemented.");
  }
  name: string;
  assignedUser: ChoresUser | null;

  constructor(name: string) {
    this.name = name;
    this.assignedUser = null;
  }

  assign(user: ChoresUser): void {
    this.assignedUser = user;
  }

  unassign(): void {
    this.assignedUser = null;
  }

  isAssigned(): boolean {
    return this.assignedUser !== null;
  }

  getAssignedUserName(): string {
    return this.assignedUser ? this.assignedUser.name : "";
  }
}
