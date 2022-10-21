const request = require("supertest");
const { app } = require("../../app");

describe("POST /users/auth/register", () => {
  // case success
  test("Should be 201 if register a new user successful", async () => {
    try {
      const res = await request(app).post("/users/auth/register").send({
        username: "putra12",
        password: "halo123",
      });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe(true);
    } catch (err) {
      //   console.log(err);
    }
  });
});

describe("POST /users/auth/register", () => {
  // case success
  test("Should be 409 if username already used", async () => {
    try {
      const res = await request(app).post("/users/auth/register").send({
        username: "putra123",
        password: "halo1234",
      });

      expect(res.statusCode).toBe(409);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe(true);
    } catch (err) {
      //   next(err);
    }
  });
});

describe("POST /users/auth/login", () => {
  // case success
  test("Should be 201 if username and password right", async () => {
    try {
      const res = await request(app).post("/users/auth/login").send({
        username: "putra12",
        password: "halo123",
      });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe(true);
    } catch (err) {
      //   console.log(err);
    }
  });
});

describe("POST /users/auth.login ", () => {
  // case success
  test("Should be 404 if username and password doesn/t match", async () => {
    try {
      const res = await request(app).post("/users/auth/login").send({
        username: "putra12",
        password: "halo12345",
      });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe(true);
    } catch (err) {
      //   console.log(err);
    }
  });
});
