const { User } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("There is error in creating user : Repositoy");
      throw { error };
    }
  }

  async deleteUser(UserId) {
    try {
      const response = await User.destroy({
        where: {
          id: UserId,
        },
      });

      return response;
    } catch (error) {
      console.log("There is error in delete user : Repositoy");
      throw { error };
    }
  }

  async updateUser(data) {
    try {
      const response = await User.update(data);
      return response;
    } catch (error) {
      console.log("There is error in updating user : Repositoy");
      throw { error };
    }
  }

  async getUser(UserId) {
    try {
      const user = await User.findByPk(UserId);
      return user;
    } catch (error) {
      console.log("There is error in getting user : Repositoy");
      throw { error };
    }
  }
}

module.exports = UserRepository;
