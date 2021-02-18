const mongoose = require('mongoose');
const sourceSchema = mongoose.Schema({
    name: String,
    url: String,
    imageUrl: String,
    description : String,
    published: Boolean,
    createdAt: Date

}, {collection: 'sources'})

module.exports = sourceSchema;