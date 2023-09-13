const { Document } = require("../models/index");

class DocumentRepository {
  async createDocument(data) {
    try {
      const document = await Document.create(data);
      return document;
    } catch (error) {
      console.log("There is error in creating user : Repositoy", error);
      throw { error };
    }
  }

  async getAllDocument(UserId) {
    try {
      const document = await Document.findAll({
        where: {
          user_id: UserId,
        },
      });

      return document;
    } catch (error) {
      console.log("Something went wrong on the repository layer", error);
      throw error;
    }
  }

  async deleteDocument(documentId) {
    try {
      const response = await Document.destroy({
        where: {
          id: documentId,
        },
      });

      return response;
    } catch (error) {
      console.log("There is error in delete user : Repositoy");
      throw { error };
    }
  }

  async updateDocument(DocsId, data) {
    try {
      const response = await Document.update(data, {
        where: {
          id: DocsId,
        },
      });
      return response;
    } catch (error) {
      console.log("There is error in updating user : Repositoy");
      throw { error };
    }
  }

  async getDocumentById(documentId) {
    try {
      const document = await documentId.findByPk(documentId);
      return document;
    } catch (error) {
      console.log("There is error in getting user : Repositoy");
      throw { error };
    }
  }
}

module.exports = DocumentRepository;
