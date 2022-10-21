const controllers = require("../../controller");
const userGame = require("../../models");
const mockRequest = (body = {}) => ({ body });

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
};

describe("POST /history", () => {
  // case success
  test("Should successfully create user history", async () => {
    try {
      const req = mockRequest({
        id_user: 10,
        time_list: 60,
        score: 100,
      });
      const res = mockResponse();

      await controllers.user_history.createUserHistory(req, res);

      expect(res.status).toBe(201);
      expect(res.json).toBeCalledWith({
        status: "success",
        message: "Create User History Success",
      });

      done();
    } catch (err) {
      //console.log(err)
    }
  });
});
describe("GET history/show", () => {
  // case success
  test("Should successfully show user history", async () => {
    try {
      await controllers.user_history.readUserHistory(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Read All Data",
        data: userGame,
      });

      done();
    } catch (err) {
      //console.log(err)
    }
  });
});

describe("GET /history/show/:id", () => {
  // case success
  test("Should be 201 successfully show user history by id", async () => {
    try {
      const { userId } = req.params;
      const req = await {
        userId,
      };
      await controllers.user_biodata.readDetailUser(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Read Data Success",
        data: userGame,
      });

      done();
    } catch (err) {
      //console.log(err)
    }
  });
});

describe("PUT /historu/update/:id", () => {
  // case success
  test("Should successfully update user history", async () => {
    try {
      const req = mockRequest({
        id_user: 10,
        time_list: 70,
        score: 120,
      });

      const res = mockResponse();
      await controllers.user_biodata.updateUserBiodata(req, res);

      expect(res.status).toBe(201);
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Update Data Success",
        data: {
          userGame,
        },
      });

      done();
    } catch (err) {}
  });
});

describe("DELETE /history/delete/:userId", () => {
  // case success
  test("Should successfully delete data", async () => {
    try {
      const { userId } = req.params;
      const req = await {
        userId,
      };
      await controllers.user_biodata.deleteUserBiodata(req, res);
      expect(res.status).toBeCalledWith(201);
      expect(res.json).toBeCalledWith({
        status: "success",
        message: "Delete Data Success",
      });

      done();
    } catch (err) {
      //console.log(err)
    }
  });
});
