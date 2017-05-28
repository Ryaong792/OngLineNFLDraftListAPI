'use strict'

const mongoose = require('mongoose')

const kSchema = new mongoose.Schema({
  player: {
    type: String,
  },
  image: {
    type: String
  },
  rank: {
    type: Number
  },
  fieldG: {
    type: Number,
  },
  FieldGA: {
    type: Number,
  },
  extraPT: {
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
const K = mongoose.model('K', kSchema)

module.exports = K
