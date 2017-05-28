'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models');
const Rb = models.rb

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  const query = {}
  Rb.find(query)
    .then(rb => res.json({
      rbs: rb.map((e) =>
        e.toJSON({ user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    rb: req.rb.toJSON({ user: req.user })
  })
}

module.exports = controller({
  index,
  show
}, { before: [] })
