const request = require ('superagent')

module.exports = {
  getFromRoute: (route) => request
    .get(route)
    .then(res => res.body)
}
