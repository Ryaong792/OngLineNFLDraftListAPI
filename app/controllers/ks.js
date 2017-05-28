'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models');
const K = models.k

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  const query = {}
  K.find(query)
    .then(k => res.json({
      ks: k.map((e) =>
        e.toJSON({ user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    k: req.k.toJSON({ user: req.user })
  })
}

module.exports = controller({
  index,
  show
}, { before: [] })
