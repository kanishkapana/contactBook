'use strict';

const config = require('../configs');
const baseConfig = config.getBase();

var mongoose = require('mongoose');
mongoose.connect('mongodb://' + baseConfig.db.mongo.host + '/' + baseConfig.db.mongo.database);

var Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true}
  },
  {collection: 'contacts', timestamps: true}
);

const model = mongoose.model('Contact', ContactSchema);

module.exports = model;
