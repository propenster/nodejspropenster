const sourceDAO = require('../daos/source-dao');

const findAllSources = () => sourceDAO.findAllSources();
const findSourceById = (sourceId) => sourceDAO.findSourceById(sourceId);
const findSourceByName = (sourceName) => sourceDAO.findSourceByName(sourceName);
const deleteSourceById = (sourceId) => sourceDAO.deleteSourceById(sourceId);
const addNewSource = (newSource) => sourceDAO.addNewSource(newSource);
const updateSource = (sourceId, updatedSource) => sourceDAO.updateSource(sourceId, updatedSource);


module.exports = {
    findAllSources,
    findSourceById,
    findSourceByName,
    deleteSourceById,
    addNewSource,
    updateSource
}