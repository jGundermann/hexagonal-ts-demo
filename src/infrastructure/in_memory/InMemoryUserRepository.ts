import { randomUUID } from "crypto";
import { User } from "../../application/core/user.core";
import { IRepository } from "../../application/ports/repository.port";

class InMemoryDatabaseError extends Error {}

export class InMemoryUserRepository implements IRepository<User> {
  private users: Set<User> = new Set();

  async get(id: string): Promise<User> {
    for (const user of this.users) {
      if (user.id === id) {
        return user;
      }
    }
    throw new InMemoryDatabaseError("Id doesn't exist");
  }

  async find(item: Partial<User>): Promise<User[]> {
    const users: User[] = [];
    for (const user of this.users) {
      if (user.username === item.username) {
        users.push(user);
      }
    }
    return users;
  }
  async create(item: Partial<User>): Promise<string> {
    const id = randomUUID();
    this.users.add(new User(id, item.username!));
    return id;
  }

  async update(item: User): Promise<boolean> {
    this.users.add(item);
    return true;
  }
}
