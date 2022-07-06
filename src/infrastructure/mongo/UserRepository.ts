import { User } from "../../application/core/user.core";
import { IRepository } from "../../application/ports/Repository";

class UserRepository implements IRepository<User> {
    get(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    find(item: Partial<User>): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    create(item: User): Promise<string> {
        throw new Error("Method not implemented.");
    }
    update(item: User): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}