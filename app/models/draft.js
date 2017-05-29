'use strict'

const mongoose = require('mongoose')

const draftSchema = new mongoose.Schema({
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String
  },
  qbs: [{
    player: {type: String},
    image: {type: String},
    rank: {type: Number},
    miscFPTS: {type: Number}
  }],
  rbs: [{
    player: {type: String},
    image: {type: String},
    rank: {type: Number},
    miscFPTS: {type: Number}
  }],
  wrs: [{
    player: {type: String},
    image: {type: String},
    rank: {type: Number},
    miscFPTS: {type: Number}
  }],
  tes: [{
    player: {type: String},
    image: {type: String},
    rank: {type: Number},
    miscFPTS: {type: Number}
  }],
  ks: [{
    player: {type: String},
    image: {type: String},
    rank: {type: Number},
    miscFPTS: {type: Number}
  }],
  dsts: [{
    player: {type: String},
    image: {type: String},
    rank: {type: Number},
    miscFPTS: {type: Number}
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      return ret
    }
  }
})
const Draft = mongoose.model('Draft', draftSchema)

module.exports = Draft
