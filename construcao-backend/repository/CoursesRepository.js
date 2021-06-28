'use strict';

const mongoClient = require("mongodb").MongoClient;
const mongoUri = "mongodb+srv://deploy:ng96tJ1bdZRbiVDl@cluster0.ru6hn.mongodb.net/Construcao?retryWrites=true&w=majority";
const dbName = "Construcao";
const collName = "courses";
const ObjectId = require('mongodb').ObjectId;

/**
 * Add a course
 *
 * newCourseDTO Course newCourseDTO
 * returns Course
 **/
exports.addCourseUsingPOST = function (newCourseDTO) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        mongoClient.connect(mongoUri, {useUnifiedTopology: true}, async (err, client) => {
            if (err) reject(err);
            const db = client.db(dbName);
            const coll = db.collection(collName);
            examples['application/json'] = await (await coll.insertOne(newCourseDTO)).ops[0];

            if (Object.keys(examples).length > 0) {
                resolve(examples[Object.keys(examples)[0]]);
            } else {
                resolve();
            }
        });
    });
}


/**
 * Delete a course by id
 *
 * id Integer id
 * returns Course
 **/
exports.deleteCourseUsingDELETE = function (id) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        mongoClient.connect(mongoUri, {useUnifiedTopology: true}, async (err, client) => {
            if (err) reject(err);
            const db = client.db(dbName);
            const coll = db.collection(collName);
            await coll.deleteOne({_id: new ObjectId(id)});

            if (Object.keys(examples).length > 0) {
                resolve(examples[Object.keys(examples)[0]]);
            } else {
                resolve();
            }
        })
    });
}


/**
 * Find all course subjects by id
 *
 * id Integer id
 * returns Subject
 **/
exports.getCourseSubjectsUsingGET = function (id) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        mongoClient.connect(mongoUri, {useUnifiedTopology: true}, async (err, client) => {
            if (err) reject(err);
            const db = client.db(dbName);
            const coll = db.collection(collName);
            examples['application/json'] = (await coll.findOne({id: id}))["subjects"];

            if (Object.keys(examples).length > 0) {
                resolve(examples[Object.keys(examples)[0]]);
            } else {
                resolve();
            }
        })
    });
}


/**
 * Find a course by id
 *
 * id Integer id
 * returns Course
 **/
exports.getCourseUsingGET = function (id) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        mongoClient.connect(mongoUri, {useUnifiedTopology: true}, async (err, client) => {
            if (err) reject(err);
            const db = client.db(dbName);
            const coll = db.collection(collName);
            examples['application/json'] = await coll.findOne({_id: new ObjectId(id)});


            if (Object.keys(examples).length > 0) {
                resolve(examples[Object.keys(examples)[0]]);
            } else {
                resolve();
            }
        })
    });
}


/**
 * Find all courses
 *
 * returns List
 **/
exports.listCoursesUsingGET = function () {
    return new Promise(function (resolve, reject) {
        var examples = {};
        mongoClient.connect(mongoUri, {useUnifiedTopology: true}, async (err, client) => {
            if (err) reject(err);
            const db = client.db(dbName);
            const coll = db.collection(collName);
            examples['application/json'] = await coll.find().toArray();

            if (Object.keys(examples).length > 0) {
                resolve(examples[Object.keys(examples)[0]]);
            } else {
                resolve();
            }
        })
    });
}


/**
 * Update a course by id
 *
 * id Integer id
 * title String title
 * returns Course
 **/
exports.updateCourseUsingPUT = function (id, newCourseDTO) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        mongoClient.connect(mongoUri, {useUnifiedTopology: true}, async (err, client) => {
            if (err) reject(err);
            const db = client.db(dbName);
            const coll = db.collection(collName);

            const updatedCourse = {$set: JSON.parse(newCourseDTO)};
            await coll.updateOne({id: id}, updatedCourse);

            examples['application/json'] = await coll.findOne({id: id});

            if (Object.keys(examples).length > 0) {
                resolve(examples[Object.keys(examples)[0]]);
            } else {
                resolve();
            }
        })
    });
}

