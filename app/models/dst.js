'use strict'

const mongoose = require('mongoose')

const dstSchema = new mongoose.Schema({
  player: {
    type: String,
  },
  image: {
    type: String
  },
  rank: {
    type: Number
  },
  sack: {
    type: Number,
  },
  int: {
    type: Number,
  },
  fr: {
    type: Number,
  },
  ff: {
    type: Number,
  },
  td: {
    type: Number,
  },
  assist: {
    type: Number,
  },
  safety: {
    type: Number,
  },
  ydsAGN: {
    type: String,
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
const Dst = mongoose.model('DST', dstSchema)

module.exports = Dst
