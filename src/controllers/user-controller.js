const UserServices = require("../services/user-services");

const userServices = new UserServices();

const create = async (req, res) => {
  try {
    const response = await userServices.createUser(req.body);
    return res.status(201).json({
      data: response,
      message: "Successfully created account",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: error,
      message: "failed to create account",
      success: false,
      err: { error },
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await userServices.deleteUser(req.params.id);
    return res.status(201).json({
      data: response,
      message: "Successfully deleted",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: response,
      message: "failed to delete account",
      success: false,
      err: { error },
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await userServices.updateUser(req.body);
    return res.status(201).json({
      data: response,
      message: "Successfully deleted",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: response,
      message: "failed to delelte account",
      success: false,
      err: { error },
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await userServices.getUser(req.params.id);
    return res.status(201).json({
      data: response,
      message: "Successfully fetched",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: response,
      message: "failed to fetched",
      success: false,
      err: { error },
    });
  }
};

module.exports = {
  get,
  destroy,
  create,
  update,
};
