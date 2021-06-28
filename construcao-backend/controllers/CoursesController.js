'use strict';

var utils = require('../utils/writer.js');
var coursesService = require('../service/CourseService');

module.exports.addCourseUsingPOST = function addCourseUsingPOST(req, res, next) {
    var newCourseDTO = req.swagger.params['newCourseDTO'].value;
    coursesService.create(newCourseDTO)
        .then(function (response) {
            utils.writeJson(res, response, 201);
        })
        .catch(function (response) {
            utils.writeJson(res, response, 400);
        });
};

module.exports.deleteCourseUsingDELETE = function deleteCourseUsingDELETE(req, res, next) {
    var id = req.swagger.params['id'].value;
    coursesService.deleteById(id)
        .then(function (response) {
            utils.writeJson(res, response, 204);
        })
        .catch(function (response) {
            utils.writeJson(res, response, 404);
        });
};

module.exports.getCourseSubjectsUsingGET = function getCourseSubjectsUsingGET(req, res, next) {
    var id = req.swagger.params['id'].value;
    coursesService.findSubjectsByIdCourse(id)
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

module.exports.getCourseUsingGET = function getCourseUsingGET(req, res, next) {
    var id = req.swagger.params['id'].value;
    coursesService.findById(id)
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

module.exports.listCoursesUsingGET = function listCoursesUsingGET(req, res, next) {
    coursesService.findAll()
        .then(function (response) {
            utils.writeJson(res, response, 200);
        })
        .catch(function (response) {
            utils.writeJson(res, response, 400);
        });
};

module.exports.updateCourseUsingPUT = function updateCourseUsingPUT(req, res, next) {
    var id = req.swagger.params['id'].value;
    var title = req.swagger.params['title'].value;
    coursesService.updateById(id, title)
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
