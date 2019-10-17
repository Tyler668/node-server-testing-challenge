const request = require('supertest');

const server = require('./server.js');

describe('GET /', () => {
    it('Should return HTTP 200 OK status code', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });
    });

    test('Should return JSON', async () => {
        const response = await request(server).get('/');

        expect(response.type).toMatch(/json/i);
    })

    it('Should return {api: "up"}', async () =>{
        const response = await request(server).get('/');
        expect (response.body).toEqual({ api: 'up' }); //Gotta use toEqual rather than toBe here
        expect (response.body.api).toBe('up'); //Alternative method using toBe

    })


    test('Should return JSON', () => {   
        request(server)
        .get('/')
        .then(res =>{
            expect(res.type).toMatch(/json/i);
        })

    })


});