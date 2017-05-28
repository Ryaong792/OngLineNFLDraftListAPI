'use strict'

const mongoose = require('mongoose')

const rbSchema = new mongoose.Schema({
  player: {
    type: String,
  },
  image: {
    type: String
  },
  rank: {
    type: Number
  },
  rushATT: {
    type: Number,
  },
  rushYDS: {
    type: String,
  },
  rushTDS: {
    type: Number,
  },
  ReceivingREC: {
    type: Number,
  },
  ReceivingYDS: {
    type: Number,
  },
  ReceivingTDS: {
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
const Rb = mongoose.model('RB', rbSchema)

module.exports = Rb
