const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/list_users_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let list_users = "/api/users/2";

describe('PUT Request', () => {
    let put_resp;
    it('makes a POST call ', async () => {
        put_resp = await baseURL.put(list_users)
            .type('form')
            .send({
                "name": "morpheus",
                "job": "zion resident"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});