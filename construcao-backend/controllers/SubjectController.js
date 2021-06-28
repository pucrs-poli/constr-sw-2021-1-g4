'use strict';

var utils = require('../utils/writer.js');
var subjectService = require('../service/SubjectService');

module.exports.addCourseUsingPOST_1 = function addCourseUsingPOST_1(req, res, next) {
    var newSubjectDTO = req.swagger.params['newSubjectDTO'].value;
    subjectService.create(newSubjectDTO)
        .then(function (response) {
            utils.writeJson(res, response, 201);
        })
        .catch(function (response) {
            utils.writeJson(res, response, 400);
        });
};

module.exports.deleteSubjectUsingDELETE = function deleteSubjectUsingDELETE(req, res, next) {
    var id = req.swagger.params['id'].value;
    subjectService.deleteById(id)
        .then(function (response) {
            utils.writeJson(res, response, 204);
        })
        .catch(function (response) {
            utils.writeJson(res, response, 404);
        });
};

module.exports.getSubjectLessonsUsingGET = function getSubjectLessonsUsingGET(req, res, next) {
    var id = req.swagger.params['id'].value;
    subjectService.findSubjectLessonsById(id)
        .then(function (response) {
            if (response === null) {
                utils.writeJson(res, response, 404);
            } else {
                utils.writeJson(res, response, 200);
            }
        })
        .catch(function (response) {
            utils.writeJson(res, response, 400);
        });
};

module.exports.getSubjectUsingGET = function getSubjectUsingGET(req, res, next) {
    var id = req.swagger.params['id'].value;
    subjectService.findById(id)
        .then(function (response) {
            if (response === null) {
                utils.writeJson(res, response, 404);
            } else {
                utils.writeJson(res, response, 200);
            }
        })
        .catch(function (response) {
            utils.writeJson(res, response, 400);
        });
};

module.exports.listSubjectsUsingGET = function listSubjectsUsingGET(req, res, next) {
    subjectService.findAll()
        .then(function (response) {
            utils.writeJson(res, response, 200);
        })
        .catch(function (response) {
            utils.writeJson(res, response, 400);
        });
};

module.exports.updateSubjectUsingPUT_1 = function updateSubjectUsingPUT_1(req, res, next) {
    var id = req.swagger.params['id'].value;
    var title = req.swagger.params['title'].value;
    subjectService.updateById(id, title)
        .then(function (response) {
            if (response === null) {
                utils.writeJson(res, response, 404);
            } else {
                utils.writeJson(res, response, 200);
            }
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
