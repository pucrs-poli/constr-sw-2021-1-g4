'use strict';

var lessonClient = require('../client/LessonClient');

exports.create = function (newLessonDTO) {
    return lessonClient.postLessonUsingPOST(newLessonDTO);
}