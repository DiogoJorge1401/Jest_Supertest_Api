import { User } from '@prisma/client'
import { prisma } from '../../database/client'
import { UsersRepository } from '../UsersRepository'

export class PrismaUsersRepository implements UsersRepository {
  async create({ email, name, username }: User): Promise<User> {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        name,
      },
    })

    return user
  }
  async exists(username: string): Promise<Boolean> {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    })

    return !!user
  }
}
