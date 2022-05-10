import { AuthenticationResponse, User } from "./user.interface";
import { userModel } from "./user.schema";
import * as jwt from "jsonwebtoken";
import { config } from "../../app/app.config";
import * as bcrypt from "bcrypt";

class UserService {
  async getAll(): Promise<User[] | null> {
    return userModel.find().exec();
  }

  async create(item: User): Promise<User> {
    // delete item._id;
    return userModel.create(item);
  }

  async getById(id: string): Promise<User | null> {
    return userModel.findById(id).exec();
  }

  async delete(id: string): Promise<boolean> {
    return userModel.deleteOne({ _id: id }).then(() => true);
  }

  async update(item: User): Promise<User | null> {
    return userModel
      .findByIdAndUpdate(item._id, item, { new: true })
      .exec();
  }

  async specificUpdate(item: User): Promise<User | null> {
    return userModel
      .findByIdAndUpdate(
        item._id,
        {
          $set: {
            firstName: item.firstName,
            lastName: item.lastName,
            login: item.login,
          },
        },
        { new: true },
      )
      .exec();
  }

  async getDeliverers(): Promise<User[] | null> {
    return userModel.find({ "userType.name": "Livreur" }).exec();
  }

  async signUp(item: User): Promise<AuthenticationResponse | null> {
    delete item._id;
    const isExisting = (await userModel
      .findOne({ login: item.login })
      .exec()) as User;
    if (!isExisting && item.login.includes("@")) {
      item.password = await bcrypt.hash(item.password as string, 10);
      const user = (await this.create(item)) as User;
      return this.getSignedUser(user);
    }
  }

  async sign_Up(item: User): Promise<AuthenticationResponse | null> {
    delete item._id;
    const isExisting = (await userModel
      .findOne({ login: item.login })
      .exec()) as User;
    if (!isExisting && item.login.includes("@")) {
      item.password = await bcrypt.hash(item.password as string, 10);
      const user = (await this.create(item)) as User;
      return this.getSignedUser(user);
    }
  }

  async getSignedUser(user: User) {
    return {
      user: user,
      token: jwt.sign(
        { _id: user._id, login: user.login },
        config.jwt.secretKey,
        {
          expiresIn: config.jwt.expiration,
        },
      ),
    };
  }

  async login(item: User): Promise<AuthenticationResponse> {
    const client = (await userModel
      .findOne({ login: item.login })
      .exec()) as User;
    const user = {
      _id: client._id,
      login: client.login,
      userType: client.userType,
      firstName: client.firstName,
      lastName: client.lastName,
    };
    // await this.sendSignupSuccessMail(createdClient);
    return this.getSignedUser(user);
  }

  async comparePassword(
    newPassword: string,
    oldPassword: string,
  ): Promise<boolean> {
    const compare = await bcrypt.compare(newPassword, oldPassword);
    return compare;
  }
}

export const userService = new UserService();
