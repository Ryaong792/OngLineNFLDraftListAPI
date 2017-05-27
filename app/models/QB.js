'use strict'

const mongoose = require('mongoose')

const qbSchema = new mongoose.Schema({
  player: {
    type: String,
  },
  image: {
    type: String
  },
  rank: {
    type: Number
  },
  passATT: {
    type: Number,
  },
  passCMP: {
    type: Number,
  },
  passYDS: {
    type: String,
  },
  passTDS: {
    type: Number,
  },
  passINTS: {
    type: Number,
  },
  rushATT: {
    type: Number,
  },
  rushYDS: {
    type: Number,
  },
  rushTDS: {
    type: Number,
  },
  miscFL: {
    type: Number,
  },
  miscFPTS: {
    type: Number,
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      return ret
    }
  }
})
const Qb = mongoose.model('QB', qbSchema)

module.exports = Qb
