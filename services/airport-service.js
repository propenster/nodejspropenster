const airportDAO = require('../daos/airport-dao');

const findAllAirports = () => airportDAO.findAllAirports();
const findAirportById = (airportId) => airportDAO.findAirportById(airportId);
const findAirportByName = (airportName) => airportDAO.findAirportByName(airportName);

const findAirportByType = (airportType) => airportDAO.findAirportByType(airportType);
const deleteAirportById = (airportId) => airportDAO.deleteAirportById(airportId);

const addNewAirport = (newAirport) => airportDAO.addNewAirport(newAirport);
const updateAirport = (airportId, updatedAirport) => airportDAO.updateAirport(airportId, updatedAirport);


module.exports = {
    findAllAirports,
    findAirportById,
    findAirportByName,
    findAirportByType,
    deleteAirportById,
    addNewAirport,
    updateAirport
}