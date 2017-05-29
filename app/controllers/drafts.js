'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models');
const Qb = models.qb;
const Rb = models.rb;
const K = models.k;
const Tes = models.tes;
const Wr = models.wr;
const Dst = models.dst;
const Draft = models.draft;

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Draft.find({_owner: req.user.id})
    .then(drafts => res.json({
      drafts: drafts.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    draft: req.draft.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const draft = Object.assign(req.body.draft, {
    _owner: req.user._id,
  })
  Draft.create(draft)
    .then(draft =>
      res.status(201)
        .json({
          draft: draft.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

const update = (req, res, next) => {
  delete req.body._owner  // disallow owner reassignment.
  req.draft.update(req.body.draft)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.draft.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Draft), only: ['show'] },
  { method: setModel(Draft, { forUser: true }), only: ['update', 'destroy'] }
] })
