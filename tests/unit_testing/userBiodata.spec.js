const controllers = require("../../controller");
const userGame = require("../../models");
const mockRequest = (body = {}) => ({ body });
const params = (params = {}) => ({
  params,
});
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
};

describe("POST /biodata", () => {
  // case success
  test("Should be 201 if successfully create user biodata", async () => {
    try {
      const req = mockRequest({
        id_user: 17,
        name: "Sihombing",
        email: "sihombing@gmail.com",
        address: "Medan",
        phone: "08277373",
      });
      const res = mockResponse();

      await controllers.user_biodata.createUserBiodata(req, res);

      expect(res.status).toBe(201);
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Create User Biodata Success",
      });

      done();
    } catch (err) {
      //console.log(err)
    }
  });
});
describe("GET /biodata/show", () => {
  // case success
  test("Should be 200 successfully show user biodata", async () => {
    try {
      await controllers.user_biodata.readAllData(req, res);
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

describe("GET /biodata/show/:id", () => {
  // case success
  test("Should be 200 successfully show user biodata by id", async () => {
    try {
      const { userId } = req.params;
      const req = await {
        userId,
      };
      await controllers.user_biodata.readDetailUser(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Read Data",
        data: userGame,
      });

      done();
    } catch (err) {
      //console.log(err)
    }
  });
});

describe("PUT /biodata/update/id", () => {
  // case success
  test("Should successfully update user bidata", async () => {
    try {
      const req = mockRequest({
        id_user: 17,
        name: "Silaban",
        email: "sihombing@gmail.com",
        address: "Medan Labuhan",
        phone: "08277373",
      });

      const res = mockResponse();
      await controllers.user_biodata.updateUserBiodata(req, res);

      expect(res.status).toBe(200);
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

describe("DELETE /biodata/delete/:userId", () => {
  // case success
  test("Should successfully delete user game", async () => {
    try {
      const { userId } = request.params;
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
    } catch (err) {}
  });
});
