import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Model } from 'mongoose'
import { User, UserDocument } from "../../schemas";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(config: ConfigService, @InjectModel(User.name) private userModel: Model<UserDocument>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET')
        })
    }

    async validate(payload: any){
        const user = await this.userModel.findOne({email: payload.email});
        user.password = undefined;
        delete user.password;
        return user;
    }
}