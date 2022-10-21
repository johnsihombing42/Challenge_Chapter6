const request = require("supertest");
const { app } = require("../../app");

describe("POST /biodata", () => {
  // case success
  test("Should successfully create user biodata", async () => {
    try {
      const res = await request(app).get("/biodata").send({
        id_user: 17,
        name: "Sihombing",
        email: "sihombing@gmail.com",
        address: "Medan",
        phone: "08277373",
      });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe("success");
      expect(res.body.message).toBe("Create User Biodata Success");
    } catch (err) {
      //   console.log(err);
    }
  });
});

describe("GET /biodata/show", () => {
  // case success
  test("Should successfully show user biodata", async () => {
    try {
      const res = await request(app).get("/biodata/show");

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe("success");
      expect(res.body.messsage).toBe("Read All Data");
    } catch (err) {
      //   console.log(err);
    }
  });
});

describe("GET /biodata/show/id", () => {
  // case success
  test("Should successfully show user biodata by id", async () => {
    try {
      const res = await request(app).get("/biodata/show/1");

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe("success");
      expect(res.body.message).toBe("Read Data");
    } catch (err) {
      //   console.log(err);
    }
  });
});

describe("PUT /biodata/update/id", () => {
  // case success
  test("Should successfully update user bidata", async () => {
    try {
      const res = await request(app).put("/biodata/update/1").send({
        id_user: 17,
        name: "Silaban",
        email: "sihombing@gmail.com",
        address: "Medan Labuhan",
        phone: "08277373",
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

describe("DELETE /biodata/delete/1", () => {
  // case success
  test("Should successfully delete user biodata", async () => {
    try {
      const res = await request(app).delete("/biodata/delete/1");

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
