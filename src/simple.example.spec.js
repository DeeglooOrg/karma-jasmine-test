const example = require('./simple.example.js')

define ('example', () => {
    define ('identity', () => {
    it ('should return the same value', () => {
      const anyVal = 5
      expect (example.identity (anyVal)).toBe (anyVal)
    })
    define ('abs', () => {
      it ('should return absolute of a value', () => {
        const positiveVal = 5
        expect (example.abs (positiveVal)).toBe (positiveVal, 'should be same')
        expect (example.abs (-positiveVal)).toBe (positiveVal, 'should have positive sign')
      })
    })
  })
})
