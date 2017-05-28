'use strict'

const mongoose = require('mongoose')

const teSchema = new mongoose.Schema({
  player: {
    type: String,
  },
  image: {
    type: String
  },
  rank: {
    type: Number
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
const Te = mongoose.model('TE', teSchema)

module.exports = Te
