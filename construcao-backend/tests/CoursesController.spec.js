const app = require('../index.js');
const supertest = require('supertest');
const coursesService = require('../service/CourseService');


describe('GET ALL COURSES', () => {
    it('Should return all courses', async () => {
        
        return await expect(coursesService.findAll()).resolves.toBeTruthy();
        
  })
})

 