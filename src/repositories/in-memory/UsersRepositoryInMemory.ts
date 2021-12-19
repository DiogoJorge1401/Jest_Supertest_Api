import { UsersRepository } from '../UsersRepository'
import { v4 as uuid } from 'uuid'
import { User } from '../../entities/User'

export class UsersRepositoryInMemory implements UsersRepository {
  private users: User[] = []

  async create(user: User): Promise<User> {
    Object.assign(user, {
      id: uuid(),
    })
    this.users.push(user)

    return user
  }
  async exists(username: string): Promise<Boolean> {
    const user = this.users.some((u) => u.username === username)
    return user
  }
}
