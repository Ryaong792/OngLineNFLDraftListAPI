'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Product = models.qb

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

// const index = (req, res, next) => {
//   const query = {}
//
//   if (req.header('player')) {
//     query.category = req.header('player')
//   }
//   Qb.find(query)
//     .then(qb => res.json({
//       qbs: qbs.map((e) =>
//         e.toJSON({ user: req.user }))
//     }))
//     .catch(next)
// }

const show = (req, res) => {
  res.json({
    qb: req.qb.toJSON({ user: req.user })
  })
}

module.exports = controller({
  index,
  show
}, { before: [
  { method: setModel(Qb), only: ['show'] }
] })
