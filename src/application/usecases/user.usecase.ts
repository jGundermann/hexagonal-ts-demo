import assert from 'assert'
import { User } from '../core/user.core'
import { IRepository } from '../ports/Repository'
import { CreateUserInfo } from '../ports/UserUseCase'

export class CreateUserError extends Error {}

export class UserUsecase implements UserUsecase {
    repository: IRepository<User>
    constructor(repository: IRepository<User>) {
        this.repository = repository
    }

    async create_user(user: CreateUserInfo): Promise<User> {
        if (user.is_not_empty_or_withespace()) {
            const id = await this.repository.create({username: user.name})
            return user.as_user(id)
        }
        throw new CreateUserError("Name must be valid")
    }

    async get_user(id: string): Promise<User> {
        assert(!!id, "id must be set")
        return await this.repository.get(id)
    }
}
