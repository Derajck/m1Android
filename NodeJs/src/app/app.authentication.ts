import { Request } from "express";
import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import { config } from "../app/app.config";
import { User } from "../collection/user/user.interface";
import { userModel } from "../collection/user/user.schema";
import { userService } from "../collection/user/user.service";
import * as bcrypt from "bcrypt";

const localStrategy = new LocalStrategy(
  { usernameField: "login" },
  async (login, password, done) => {
    try {
      const user = (await userModel
        .findOne({ login })
        .exec()) as User;
      const validPassword = await userService.comparePassword(
        password,
        user.password as string,
      );
      if (!user || !validPassword) {
        return done(null, false, {
          message: "Incorrect username or password",
        });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  },
);

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: config.jwt.secretKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (jwtPayload, done) => {
    try {
      const user = await userModel.findById(jwtPayload._id).exec();
      return user ? done(null, user) : done(null, false);
    } catch (error) {
      return done(error);
    }
  },
);

passport.use(localStrategy);
passport.use(jwtStrategy);

export default passport;
