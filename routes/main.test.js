const request = require("supertest");
const express = require("express");
const router = require("./main");

const app = new express();
app.use('/', router);

// Creates a test suite for the root path
describe("Test the root path", () => {
  // Creates a test that expects a 200 status code
  test("It should response the GET method", async () => {
    // Sets the number of assertions expected to be run
    expect.assertions(2);
    // Sends a GET request to the root path
    const response = await request(app).get("/");
    // Expects a 200 status code
    expect(response.statusCode).toBe(200);
    // Expects the response header content-type to be "text/html; charset=utf-8"
    expect(response.headers["content-type"]).toBe("text/html; charset=UTF-8");
  });
});
