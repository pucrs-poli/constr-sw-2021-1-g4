'use strict';

const mongoClient = require("mongodb").MongoClient;
const mongoUri = "mongodb+srv://deploy:ng96tJ1bdZRbiVDl@cluster0.ru6hn.mongodb.net/Construcao?retryWrites=true&w=majority";
const dbName = "Construcao";
const collName = "subjects";
const ObjectId = require('mongodb').ObjectId;

/**
 * Add a subject
 *
 * newSubjectDTO Subject newSubjectDTO
 * returns Subject
 **/
exports.addSubjectUsingPOST_1 = function (newSubjectDTO) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        mongoClient.connect(mongoUri, {useUnifiedTopology: true}, async (err, client) => {
            if (err) reject(err);
            const db = client.db(dbName);
            const coll = db.collection(collName);
            examples['application/json'] = await (await coll.insertOne(newSubjectDTO)).ops[0];

            if (Object.keys(examples).length > 0) {
                resolve(examples[Object.keys(examples)[0]]);
            } else {
                resolve();
            }
        });
    });
}


/**
 * Delete a subject
 *
 * id Integer id
 * returns Subject
 **/
exports.deleteSubjectUsingDELETE = function (id) {
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
 * Find all subject lessons by id
 *
 * id Integer id
 * returns Lesson
 **/
exports.getSubjectLessonsUsingGET = function (id) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        mongoClient.connect(mongoUri, {useUnifiedTopology: true}, async (err, client) => {
            if (err) reject(err);
            const db = client.db(dbName);
            const coll = db.collection(collName);
            examples['application/json'] = (await coll.findOne({_id: ObjectId(id)}))["lessons"];

            if (Object.keys(examples).length > 0) {
                resolve(examples[Object.keys(examples)[0]]);
            } else {
                resolve();
            }
        })
    });
}


/**
 * Find a subject by id
 *
 * id Integer id
 * returns Subject
 **/
exports.getSubjectUsingGET = function (id) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        mongoClient.connect(mongoUri, {useUnifiedTopology: true}, async (err, client) => {
            if (err) reject(err);
            const db = client.db(dbName);
            const coll = db.collection(collName);
            examples['application/json'] = await coll.findOne({_id: ObjectId(id)});

            if (Object.keys(examples).length > 0) {
                resolve(examples[Object.keys(examples)[0]]);
            } else {
                resolve();
            }
        })
    });
}


/**
 * Find all subjects
 *
 * returns List
 **/
exports.listSubjectsUsingGET = function () {
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
 * Update a subject
 *
 * id Integer id
 * title String title
 * returns Subject
 **/
exports.updateSubjectUsingPUT_1 = function (id, newSubjectDTO) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        mongoClient.connect(mongoUri, {useUnifiedTopology: true}, async (err, client) => {
            if (err) reject(err);
            const db = client.db(dbName);
            const coll = db.collection(collName);

            const updatedCourse = {$set: JSON.parse(newSubjectDTO)};
            await coll.updateOne({id: id}, updatedCourse);

            examples['application/json'] = await coll.findOne({_id: ObjectId(id)});

            if (Object.keys(examples).length > 0) {
                resolve(examples[Object.keys(examples)[0]]);
            } else {
                resolve();
            }
        })
    });
}

