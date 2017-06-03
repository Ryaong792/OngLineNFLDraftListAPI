'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models');
const Dst = models.dst

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  const query = {}
  Dst.find(query)
    .then(dst => res.json({
      dsts: dst.map((e) =>
        e.toJSON({ user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    dst: req.dst.toJSON({ user: req.user })
  })
}

module.exports = controller({
  index,
  show
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
] })
