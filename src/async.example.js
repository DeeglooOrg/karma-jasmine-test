module.exports = {
  asyncTimeout: async (cb, ms = 0) =>
  new Promise ((res, rej) => {
    setTimeout (() => {cb && cb(); res()}, ms)
  })
}
