const airportService = require('../services/airport-service');

module.exports = function(app) {

    app.get('/api/v1/airports/', (req, res)=> airportService.findAllAirports().then(allairports => res.json(allairports)));

    app.get('/api/v1/airports/:airportId', (req, res)=> airportService.findAirportById(req.params['airportId']).then(airport => res.json(airport)));

    app.get('/api/v1/airports/:airportName', (req, res) => airportService.findAirportByName(req.params['airportName']).then(airport => res.json(airport)));

    app.get('/api/v1/airports/:airportType', (req, res)=> airportService.findAirportByType(req.params['airportType']).then(airport => res.json(airport)));

    app.post('/api/v1/airports/', (req, res) => airportService.addNewAirport(req.body).then(newAirport => res.json(newAirport)));

    app.delete('/api/v1/airports/:airportId', (req, res) => airportService.deleteAirportById(req.params['airportId']).then(status => res.send(status)));

    app.put('/api/v1/airports/:airportId', (req, res) => airportService.updateAirport(req.params['airportId'], req.body).then(status => res.send(status)));

};



