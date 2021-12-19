import { User } from '../entities/User';

export interface UsersRepository {
  create(user: User): Promise<User>
  exists(username: string): Promise<Boolean>
}
