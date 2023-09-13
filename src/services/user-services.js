const UserRepository = require("../Repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = require("../config/serverConfig");
const bcrypt = require("bcrypt");

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

  async signIn(userEmail, plainPassword) {
    try {
      // get User detail by email
      const user = await this.userRepository.getByEmail(userEmail);

      const passwordMatch = await this.checkPassword(
        plainPassword,
        user.password
      );

      if (!passwordMatch) {
        console.log("Password does not match");
        throw { error: "Incorrect password" };
      }

      const newJwt = this.createToken({
        email: userEmail,
        id: user.id,
      });

      return newJwt;
    } catch (error) {
      console.log("Something wrong in signIn");
      throw error;
    }
  }

  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);

      if (!response) {
        console.log("Invalid token");
        throw { errpr: "Invalid token" };
      }

      const user = await this.userRepository.getByEmail(response.email);

      if (!user) {
        console.log("Token is expired now");
        throw { error: "Token is expired now" };
      }

      return response;
    } catch (error) {
      console.log("Something wrong in authenticating jwt token", error);
      throw error;
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

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_TOKEN, { expiresIn: "1d" });

      return result;
    } catch (error) {
      console.log("Token creation failed", error);
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_TOKEN);
      return response;
    } catch (error) {
      console.log("Token verification failed", error);
      throw error;
    }
  }

  async checkPassword(plainPassword, hashPassword) {
    try {
      const response = await bcrypt.compare(plainPassword, hashPassword);
      if (!response) {
        console.log(
          "Password auth is failed, try writing correct password",
          response
        );
        throw {
          error: "Password auth is failed, try writing correct password",
        };
      }

      return response;
    } catch (error) {
      console.log("There is error in authentication : Service Layer", error);
      throw { error };
    }
  }
}

module.exports = UserServices;
