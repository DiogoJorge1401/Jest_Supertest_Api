export class User {
  id?: string
  name: string
  username: string
  email: string

  constructor({ name, username, email }: User) {
    Object.assign(this, {
      name,
      username,
      email,
    })
  }

  static create({ email, name, username }: User) {
    const user = new User({ email, name, username })
    return user
  }
}
