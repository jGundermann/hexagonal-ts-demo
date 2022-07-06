import { User } from "../core/user.core";

export class CreateUserInfo {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  is_not_empty_or_withespace(): boolean {
    return !!this.name.trim();
  }

  as_user(id: string): User {
    return new User(id, this.name);
  }
}

export interface IUserUsecase {
  create_user(user: CreateUserInfo): Promise<User>;
  get_user(id: string): Promise<User>;
}
