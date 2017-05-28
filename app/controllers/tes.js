'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models');
const Te = models.te

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  const query = {}
  Te.find(query)
    .then(te => res.json({
      tes: te.map((e) =>
        e.toJSON({ user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    te: req.te.toJSON({ user: req.user })
  })
}

module.exports = controller({
  index,
  show
}, { before: [] })
