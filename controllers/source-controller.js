const sourceService = require('../services/source-service')

module.exports = function (app) {
    app.get('/api/v1/sources', (req, res) => sourceService.findAllSources().then(sources => res.json(sources.slice(
        (req.query.page -1) * (req.query.limit), req.query.page * req.query.limit
    ))));

    app.get('/api/v1/sources/:sourceId', (req, res) => sourceService.findSourceById(req.params['sourceId']).then(source => res.json(source)));

    app.get('/api/v1/sources/:sourceName', (req, res) => sourceService.findSourceByName(req.params['sourceName']).then(source => res.json(source)));

    app.delete('/api/v1/sources/:sourceId', (req, res) => sourceService.deleteSourceById(req.params['sourceId']).then(status => res.send(status)));

    app.post('/api/v1/sources/', (req, res) => sourceService.addNewSource(req.body).then(newSource => res.json(newSource)));

    app.put('/api/v1/sources/:sourceId', (req, res) => sourceService.updateSource(req.params['sourceId'], req.body).then(status => res.send(status)));

};