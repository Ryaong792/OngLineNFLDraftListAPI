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
    unique: true,
  },
  position: {
    type: String,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  rank: {
    type: Number,
  },
  miscFPTS: {
    type: Number,
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
