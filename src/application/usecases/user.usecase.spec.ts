import assert from "assert";
import { User } from "../core/user.core";
import { IRepository } from "../ports/repository.port";
import { CreateUserInfo } from "../ports/userusercase.port";
import { UserUsecase } from "./user.usecase";

class MockUserRepository implements IRepository<User> {
  async get(_: string): Promise<User> {
    return new User("luka", "luc");
  }
  find(item: Partial<User>): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  async create(item: Partial<User>): Promise<string> {
    return "andrea";
  }
  update(item: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

describe("User usecase", () => {
  it("should be able to create a user", async () => {
    const repository = new MockUserRepository();
    const userUsecase = new UserUsecase(repository);
    const user = await userUsecase.create_user(new CreateUserInfo("ange"));
    assert.equal(user.id, "andrea");
    assert.equal(user.username, "ange");
  });
});
