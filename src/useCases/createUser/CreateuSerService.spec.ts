import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory'
import { UsersRepository } from '../../repositories/UsersRepository'
import { CreateUserService } from './CreateUserService'

const generateFackUser = () => ({
  email: 'sue@mail.com',
  name: 'sue',
  username: 'suegoidkun',
})

describe('Create User Service', () => {
  let createUserService: CreateUserService
  let usersRepository: UsersRepository

  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory()
    createUserService = new CreateUserService(usersRepository)
  })

  it('should be able to create a new user', async () => {
    const user = await createUserService.execute(generateFackUser())
    expect(user).toHaveProperty('id')
  })
  it('should not be able to create an existing user', async () => {
    await createUserService.execute(generateFackUser())
    expect(createUserService.execute(generateFackUser())).rejects.toEqual(
      new Error('User alredy exists!')
    )
  })
})
