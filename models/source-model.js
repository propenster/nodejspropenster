const mongoose = require('mongoose');
const sourceSchema = require('./source-schema');

const sourceModel = mongoose.model("sourceModel", sourceSchema);

module.exports = sourceModel;
