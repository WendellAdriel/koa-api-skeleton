import server from '~/server'
import supertest from 'supertest'

const request = supertest.agent(server.listen())

describe('Hello World', () => {
  it('should return message "Hello World"', done => {
    request
      .get('/')
      .expect(200)
      .expect({message: 'Hello World'}, done)
  })
})
