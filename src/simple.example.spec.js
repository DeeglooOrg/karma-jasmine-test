const example = require('./simple.example.js')

define ('example', () => {
    define ('identity', () => {
    it ('should return the same value', () => {
      const val = 5
      expect (example.identity (val)).toBe (val)
    })
    define ('abs', () => {
      it ('should return absolute of a value', () => {
        const val = 5
        expect (example.abs (val)).toBe (val, 'should be same')
        expect (example.abs (-val)).toBe (val, 'should have positive sign')
      })
    })
  })
})
