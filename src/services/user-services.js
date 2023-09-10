const UserRepository = require("../Repository/user-repository");

class UserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("There is error in creating user :  Service Layer", error);
      throw { error };
    }
  }

  async deleteUser(UserId) {
    try {
      const response = await this.userRepository.deleteUser({
        where: {
          id: UserId,
        },
      });

      return response;
    } catch (error) {
      console.log("There is error in delete user :  Service Layer");
      throw { error };
    }
  }

  async updateUser(data) {
    try {
      const response = await this.userRepository.updateUser(data);
      return response;
    } catch (error) {
      console.log("There is error in updating user :  Service Layer");
      throw { error };
    }
  }

  async getUser(UserId) {
    try {
      const user = await this.userRepository.getUser(UserId);
      return user;
    } catch (error) {
      console.log("There is error in getting user : Service Layer");
      throw { error };
    }
  }
}

module.exports = UserServices;
