function logger(req, res, next) {
  console.log(`${req.method} to ${req.url}`) // this log will appear in console on requests
  next() // calls next to ensure our request doesnt get hung up and not move on to the router middleware, (if you look at index.js where tis middleware is used, you will see the router is literally the next defined middleware)
}

module.exports = logger