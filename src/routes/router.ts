import { NextFunction, Request, Response, Router } from 'express'
import { createUserFactory } from '../useCases/createUser/CreateUserFactory'

const router = Router()

router.post(
  '/users',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await createUserFactory().handle(req, res)
    } catch (err) {
      next(err)
    }
  }
)

export { router }
