const { asyncTimeout } = require('./async.example.js')

define('asyncTimeout', () => {
  const ms = 50
  let spyCb
  beforeEach(() => {
    spyCb = jasmine.createSpy('Archer')
    jasmine.clock().install()
  })
  afterEach(() => {
    jasmine.clock().uninstall()
  })
  it('should call the given callback', () => {
    asyncTimeout(spyCb, ms)
    jasmine.clock().tick(ms)
    expect(spyCb).toHaveBeenCalled()
  })

  it('should wait for milliseconds before call', () => {
    asyncTimeout(spyCb, ms)
    jasmine.clock().tick(ms - 1)
    expect(spyCb).not.toHaveBeenCalled()
    jasmine.clock().tick(1)
    expect(spyCb).toHaveBeenCalled()
  })
})
