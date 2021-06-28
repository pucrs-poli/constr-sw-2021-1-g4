'use strict';

var CoursesRepository = require('../repository/CoursesRepository');
var SubjectRepository = require('../repository/SubjectRepository');
var LessonsService = require('../service/LessonService');
const ObjectId = require('mongodb').ObjectId;


exports.create = function (newCourseDTO) {
    return CoursesRepository.addCourseUsingPOST({"description": newCourseDTO.description}).then((courseCreated) => {
        newCourseDTO.subjects.forEach((subject) => {
            SubjectRepository.addSubjectUsingPOST_1({
                "title": subject.title,
                "idCourse": courseCreated._id
            }).then((subjectCreated) => {
                subject.lessons.forEach((lesson) => {
                    LessonsService.create({name: lesson.name, subjectId: subjectCreated._id})
                })
            })
        })
        return courseCreated
    })
}

exports.findSubjectsByIdCourse = function (id) {
    return SubjectRepository.listSubjectsUsingGET().then((subjectList) => {
        var list = [];
        subjectList.forEach((subject) => {
            if (subject.idCourse.equals(new ObjectId(id))) {
                list.push(subject);
            }
        })
        return list;
    })
}

exports.findById = function (id) {
    return CoursesRepository.getCourseUsingGET(id);
}

exports.deleteById = function (id) {
    return CoursesRepository.deleteCourseUsingDELETE(id);
}

exports.findAll = function () {
    return CoursesRepository.listCoursesUsingGET();
}

exports.updateById = function (id, newCourseDT) {
    return CoursesRepository.updateCourseUsingPUT(id, newCourseDT);
}
