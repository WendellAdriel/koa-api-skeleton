import 'babel-polyfill'
import server from '~/server'
import supertest from 'supertest'

const request = supertest.agent(server.listen())

describe('Hello World', () => {
  it('should display "Hello World"', done => {
    request
      .get('/')
      .expect(200)
      .expect('Hello World', done)
  })
})
