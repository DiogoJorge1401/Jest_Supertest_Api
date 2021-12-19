/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '../../app'
import request from 'supertest'

const generateFakeRamdomUser = () => {
  const rand = Math.round(Math.random() * 1000)
  return {
    email: `sue${rand}@mail.com`,
    name: `sue${rand}`,
    username: `suegoidkun${rand}`,
  }
}
const generateFixedRamdomUser = () => {
  return {
    email: `sue$12@mail.com`,
    name: `sue`,
    username: `suegoidkun`,
  }
}

describe('Create User Controller', () => {
  it('should be able to create a new user', async () => {
    const res = await request(app).post('/users').send(generateFakeRamdomUser())
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
  })
  it('should no be able to create an existing user', async () => {
    await request(app).post('/users').send(generateFixedRamdomUser())
    const res = await request(app)
      .post('/users')
      .send(generateFixedRamdomUser())
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('message')
  })
})
