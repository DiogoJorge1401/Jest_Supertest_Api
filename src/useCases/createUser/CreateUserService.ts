import { User } from '../../entities/User'
import { UsersRepository } from '../../repositories/UsersRepository'

interface UserRequest {
  username: string
  email: string
  name: string
}

export class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ email, name, username }: UserRequest) {
    if (!email || !name || !username) throw new Error('Missing fields!')
    const userAlredyExists = await this.usersRepository.exists(username)
    if (userAlredyExists) throw new Error('User alredy exists!')

    const userCreate = User.create({ email, name, username })
    const user = await this.usersRepository.create(userCreate)
    return user
  }
}
