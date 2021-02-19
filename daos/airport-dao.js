const airportModel = require('../models/airport-model');

const findAllAirports = () => airportModel.find();
// const findAirportById = (airportId) => airportModel.findById(airportId);
const findAirportById = (airportId) => airportModel.findOne({_id: airportId});
const findAirportByName = (airportName) => airportModel.find({ 'name': airportName.toLowerCase() });

const findAirportByType = (airportType) => airportModel.find({'type': airportType.toLowerCase()});
const deleteAirportById = (airportId) => airportModel.deleteOne({ _id: airportId });

const addNewAirport = (newAirport) => airportModel.create(newAirport);
const updateAirport = (airportId, updatedAirport) => airportModel.updateOne({ _id: airportId }, {$set: updatedAirport })


module.exports = {
    findAllAirports,
    findAirportById,
    findAirportByName,
    findAirportByType,
    deleteAirportById,
    addNewAirport,
    updateAirport
}

