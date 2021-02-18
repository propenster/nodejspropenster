const sourceModel = require('../models/source-model');

const findAllSources = () => sourceModel.find();
const findSourceById = (sourceId) => sourceModel.findById(sourceId);
const findSourceByName = (sourceName) => sourceModel.find({ 'name': sourceName.toLowerCase()} );
const deleteSourceById = (sourceId) => sourceModel.deleteOne({_id: sourceId});
const addNewSource = (newSource) => sourceModel.create(newSource);
const updateSource = (sourceId, updatedSource) => sourceModel.update({_id: sourceId}, {$set: updatedSource});

module.exports = {
    findAllSources,
    findSourceById,
    findSourceByName,
    deleteSourceById,
    addNewSource,
    updateSource
}