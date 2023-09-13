const UserServices = require("../services/user-services");

const userServices = new UserServices();

const authenticated = async (req, res, next) => {
  try {
    const token = await req.headers["x-access-token"];

    const data = await userServices.isAuthenticated(token);
    console.log(data.id);
    req.id = data.id;
    next();

    // return res.status(200).json({
    //   data: response,
    //   message: "User get authenticated",
    //   success: true,
    //   err: {},
    // });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "login failed",
      success: false,
      err: { error },
    });
  }
};

module.exports = {
  authenticated,
};
