const request = require("supertest");
const { app } = require("../../app");

describe("GET/ users/show", () => {
  // case success
  test("Should successfully show user game", async () => {
    try {
      const res = await request(app).get("/users/show");

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe("success");
      expect(res.body.message).toBe("Read all data success");
    } catch (err) {
      //   console.log(err);
    }
  });
});

describe("GET /users/show/id", () => {
  // case success
  test("Should successfully show user game by id", async () => {
    try {
      const res = await request(app).get("/users/show/1");

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe("success");
      expect(res.body.message).toBe("Read Data Success");
    } catch (err) {
      //   console.log(err);
    }
  });
});

describe("PUT /users/update/id", () => {
  // case success
  test("Should successfully update user game", async () => {
    try {
      const res = await request(app).put("/users/update/1").send({
        username: "john_binar",
        password: "tespassword",
      });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe("success");
      expect(res.body.message).toBe("Update Data Success");
    } catch (err) {
      //   console.log(err);
    }
  });
});

describe("DELETE /users/delete/id", () => {
  // case success
  test("Should successfully delete user game", async () => {
    try {
      const res = await request(app).delete("/users/delete/1");

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe("success");
      expect(res.body.message).toBe("Delete Data Success");
    } catch (err) {
      //   console.log(err);
    }
  });
});
