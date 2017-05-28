'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models');
const Wr = models.wr

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  const query = {}
  Wr.find(query)
    .then(wr => res.json({
      wrs: wr.map((e) =>
        e.toJSON({ user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    wr: req.wr.toJSON({ user: req.user })
  })
}

module.exports = controller({
  index,
  show
}, { before: [] })
