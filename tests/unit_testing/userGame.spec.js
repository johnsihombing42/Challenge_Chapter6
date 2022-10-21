const controllers = require("../../controller");
const userGame = require("../../models");
const mockRequest = (body = {}) => ({ body });

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
};

describe("GET/ users/show", () => {
  // case success
  test("Should successfully show user game", async () => {
    try {
      await controllers.user_game.readAllData(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Read all data success",
        data: userGame,
      });

      done();
    } catch (err) {
      //console.log(err)
    }
  });
});

describe("PUT /users/update/id", () => {
  // case success
  test("Should successfully update user game", async () => {
    try {
      const req = mockRequest({
        username: "john_binar",
        password: "tespassword",
      });

      const res = mockResponse();
      await controllers.user_game.updateUserGame(req, res);

      expect(res.status).toBe(200);
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Update Data Success",
        data: {
          userGame,
        },
      });

      done();
    } catch (err) {
      //console.log(err)
    }
  });
});

describe("DELETE /users/delete/id", () => {
  // case success
  test("Should successfully delete user game", async () => {
    try {
      const { userId } = req.params;
      const req = await {
        userId,
      };
      await controllers.user_game.deleteDataUser(req, res);

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
