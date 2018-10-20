const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/list_users_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let list_users = "/api/users?page=2";

describe('First Request to Get Users',()=>{
    let res;
    it("See Response", async function () {
        res = await baseURL.get(list_users); //Sending the GET request
        console.log(res.body);
    });

    it('checks that the response was OK',async()=>{
        await (expect(res.status).to.equal(200));
    });

    it('asserts the various attributes',async ()=>{
        await(expect(res.body.page).to.equal(2));
    });

    it('checks that the data is an array',async ()=>{
      await (expect(res.body.data).to.be.an('array'));
    });

    it('prints length of data array',async()=>{
        await (console.log(res.body.data.length));
    });

    it('gets the id from the array',async()=>{
         for(let i=0;i<res.body.data.length;i++){
            await(console.log(res.body.data[i].id));
            await (console.log(res.body.data[i].first_name));
         }
    });

    it('matches the schema for the API',async()=>{
       await (expect(joi.validate(schema.schema).error).to.be.null);
    })
});

