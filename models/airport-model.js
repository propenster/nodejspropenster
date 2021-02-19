const mongoose = require('mongoose');
const airportSchema = require('../models/airport-schema');
const airportModel = mongoose.model(
    "airportModel", 
    airportSchema
);

module.exports = airportModel;