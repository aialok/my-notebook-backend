const DocumentServices = require("../services/document-services");

const documentServices = new DocumentServices();

const getAll = async (req, res) => {
  try {
    const data = req.id;
    const response = await documentServices.getAllDocument(data);
    return res.status(200).json({
      data: response,
      message: "All document fetched succesffully",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "Something error in fetching data",
      success: false,
      err: {},
    });
  }
};

const create = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      content: req.body.content,
      type: req.body.type,
      user_id: req.id,
    };

    const response = await documentServices.createDocument(data);
    return res.status(201).json({
      data: response,
      message: "document created successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: { error },
      message: "Something error in fetching data",
      success: false,
      err: {},
    });
  }
};

const update = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      content: req.body.content,
      type: req.body.type,
      user_id: req.id,
    };

    const response = await documentServices.updatedocument(req.params.id, data);

    return res.status(200).json({
      data: response,
      message: "successfully updated the document ",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: { error },
      message: "Something error in updating data",
      success: false,
      err: {},
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await documentServices.deleteDocument(req.params.id);
    return res.status(200).json({
      data: response,
      message: "Successfully deleted the document ",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: { error },
      message: "Something error in deleting document",
      success: false,
      err: {},
    });
  }
};

module.exports = {
  create,
  getAll,
  update,
  destroy,
};
