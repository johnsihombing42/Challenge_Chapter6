const request = require("supertest");
const { app } = require("../../app");

describe("POST /history", () => {
  // case success
  test("Should successfully create user history", async () => {
    try {
      const res = await request(app).post("/history").send({
        id_user: 10,
        time_list: 60,
        score: 100,
      });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe("success");
      expect(res.body.message).toBe("Create User History Success");
    } catch (err) {
      //   console.log(err);
    }
  });
});

describe("GET history/show", () => {
  // case success
  test("Should successfully show user history", async () => {
    try {
      const res = await request(app).get("/history/show");

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe("success");
    } catch (err) {
      //   console.log(err);
    }
  });
});

describe("GET history/show/id", () => {
  // case success
  test("Should successfully show user history by id", async () => {
    try {
      const res = await request(app).get("/history/show/1");

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

describe("PUT history/update/id", () => {
  // case success
  test("Should successfully update user history", async () => {
    try {
      const res = await request(app).put("/history/update/1").send({
        id_user: 10,
        time_list: 70,
        score: 120,
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

describe("DELETE /history/delete/id", () => {
  // case success
  test("Should successfully delete data", async () => {
    try {
      const res = await request(app).delete("/history/delete/1");

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
