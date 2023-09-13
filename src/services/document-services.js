const DocumentRepository = require("../Repository/document-repository.js");

// const jwt = require("jsonwebtoken");
// const { JWT_TOKEN } = require("../config/serverConfig");
// const bcrypt = require("bcrypt");

class DocumentServices {
  constructor() {
    this.documentRepository = new DocumentRepository();
  }

  async createDocument(data) {
    try {
      const user = await this.documentRepository.createDocument(data);
      return user;
    } catch (error) {
      console.log("There is error in creating user :  Service Layer", error);
      throw { error };
    }
  }

  async deleteDocument(documentId) {
    try {
      const response = await this.documentRepository.deleteDocument(documentId);

      return response;
    } catch (error) {
      console.log("There is error in delete user :  Service Layer");
      throw { error };
    }
  }

  async updatedocument(documentId, data) {
    try {
      const response = await this.documentRepository.updateDocument(
        documentId,
        data
      );
      return response;
    } catch (error) {
      console.log("There is error in updating user :  Service Layer");
      throw { error };
    }
  }

  async getAllDocument(UserId) {
    try {
      const documents = await this.documentRepository.getAllDocument(UserId);
      return documents;
    } catch (error) {
      console.log("There is error in getting user : Service Layer");
      throw { error };
    }
  }

  async getDocument(UserId) {
    try {
      const document = await this.documentRepository.getDocumentById(UserId);
      return document;
    } catch (error) {
      console.log("There is error in getting Notes : Service Layer", error);
      throw { error };
    }
  }
}

module.exports = DocumentServices;
