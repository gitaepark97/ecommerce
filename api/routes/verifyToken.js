const jwt = require('jsonwebtoken')
const User = require('../models/User')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token

  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json('Token is not valid')
      req.user = user
      next()
    })
  } else {
    return res.status(401).json('You are not authenticated')
  }
}

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await User.findById(req.user.id)
    if (user.id === req.params.id || user.isAdmin) {
      next()
    } else {
      res.status(403).json('You are not allowed to do that')
    }
  })
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await User.findById(req.user.id)
    if (user.isAdmin) {
      next()
    } else {
      res.status(403).json('You are not allowed to do that')
    }
  })
}

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
}
