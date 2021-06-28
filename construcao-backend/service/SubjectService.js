'use strict';

var SubjectRepository = require('../repository/SubjectRepository');

exports.create = function (newSubjectDTO) {
    return SubjectRepository.addSubjectUsingPOST_1(newSubjectDTO);
}

exports.deleteById = function (id) {
    return this.findById(id).then((subject) => {
       return SubjectRepository.deleteSubjectUsingDELETE(subject._id);
    })
}

exports.findSubjectLessonsById = function (id) {
    return SubjectRepository.getSubjectLessonsUsingGET(id);
}

exports.findById = function (id) {
    return SubjectRepository.getSubjectUsingGET(id);
}

exports.findAll = function () {
    return SubjectRepository.listSubjectsUsingGET();
}

exports.updateById = function (id, newSubjectDTO) {
    return SubjectRepository.updateSubjectUsingPUT_1(id, newSubjectDTO);
}