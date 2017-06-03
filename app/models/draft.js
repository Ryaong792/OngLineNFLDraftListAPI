'use strict'

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const draftSchema = new mongoose.Schema({
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  playerid: {
    type: String,
    rquired: true,
    unique: true
  },
  position: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  },
  miscFPTS: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
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
draftSchema.plugin(uniqueValidator);
const Draft = mongoose.model('Draft', draftSchema)

module.exports = Draft
