'use strict'

const mongoose = require('mongoose')

const wrSchema = new mongoose.Schema({
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
    type: Number,
  },
  rushTDS: {
    type: Number,
  },
  ReceivingREC: {
    type: Number,
  },
  ReceivingYDS: {
    type: String,
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
const Wr = mongoose.model('WR', wrSchema)

module.exports = Wr
