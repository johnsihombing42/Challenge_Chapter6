const controllers = require("../../controller");
const userGame = require("../../models");
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
};
describe("POST /users/auth/register", () => {
  // case success
  test("Should be 201 if register a new user successful", async () => {
    try {
      const req = mockRequest({
        username: "putra12",
        password: "halo123",
      });
      const res = mockResponse();

      await controllers.user_game.registerUser;

      expect(res.status).toBe(201);
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Register user success",
        data: {
          username: req.body.username,
          password: req.body.password,
        },
      });

      done();
    } catch (err) {
      //console.log(err)
    }
  });
});

describe("POST /users/auth/register", () => {
  // case success
  test("Should be 409 if register a new user successful", async () => {
    try {
      const req = mockRequest({
        username: "putra12",
        password: "halo123",
      });
      const res = mockResponse();

      await controllers.user_game.registerUser;

      expect(res.status).toBe(409);
      expect(res.json).toBeCalledWith({
        status: false,
        message: "username already used!",
        data: {
          username: req.body.username,
          password: req.body.password,
        },
      });

      done();
    } catch (err) {
      //console.log(err)
    }
  });
});

describe("POST /users/auth/login", () => {
  // case success
  test("Should be 201 if username and password right", async () => {
    try {
      const req = mockRequest({ username: "putra12", password: "halo123" });
      const res = mockResponse();
      const user = await userGame.findOne({
        where: { username: req.body.username },
      });

      await controllers.user_game.loginUser(req, res);
      expect(res.status).toBeCalledWith(201);
      expect(res.json).toBeCalledWith({
        status: true,
        message: "success",
        data: user,
      });

      done();
    } catch (err) {}
  });
});

describe("POST /users/auth/login", () => {
  // case success
  test("Should be 400 if username and password doesn't match", async () => {
    try {
      const req = mockRequest({
        username: "putrasalah12",
        password: "halo1243",
      });
      const res = mockResponse();
      const user = await userGame.findOne({
        where: { username: req.body.username },
      });

      await controllers.user_game.loginUser(req, res);
      expect(res.status).toBeCalledWith(400);
      expect(res.json).toBeCalledWith({
        status: false,
        message: "email or password doesn't match!",
        data: user,
      });

      done();
    } catch (err) {}
  });
});
