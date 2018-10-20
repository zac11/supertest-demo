const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/list_users_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let list_users = "/api/users";

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(list_users)
        .type('form')
        .send({
                "name": "morpheus",
                "job": "leader"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});