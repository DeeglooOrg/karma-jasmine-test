const sinon = require('sinon')
const { getFromRoute } = require('./sinon.example.js')

describe ('fakeServer', () => {
  let server
  beforeEach (() => {
    // this intercepts requests
    server = sinon.fakeServer.create()
  })
  afterEach (() => {
    server.restore()
  })

  it ('should return a given value', async () => {
    const route = '/get-bla'
    const obj = {bla: 3}

    server.respondWith('GET', route, [
      200,
      {"Content-Type": "application/json"},
      JSON.stringify(obj)
    ])

    const resPromise = getFromRoute (route)

    server.respond()

    const res = await resPromise
    expect (res).toEqual (obj)
  })

})
