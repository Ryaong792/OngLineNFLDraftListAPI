'use strict'

const mongoose = require('mongoose')

const qbSchema = new mongoose.Schema({
  Player: {
    type: String,
  },
  image: {
    type: String
  },
  Rank: {
    type: Number
  },
  PassATT: {
    type: Number,
  },
  PassCMP: {
    type: Number,
  },
  PassYDS: {
    type: Number,
  },
  PassTDS: {
    type: Number,
  },
  PassINTS: {
    type: Number,
  },
  RushATT: {
    type: Number,
  },
  RushYDS: {
    type: Number,
  },
  RushTDS: {
    type: Number,
  },
  MiscFL: {
    type: Number,
  },
  MiscFPTS: {
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
const Product = mongoose.model('QB', qbSchema)

module.exports = QB
