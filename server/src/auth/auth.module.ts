import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas";
import { AuthController } from "./auth.controller";
import { AuthServise } from "./auth.service";
import { JWTStrategy } from "./strategy";

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        JwtModule.register({})
    ],
    controllers: [AuthController],
    providers: [AuthServise, ConfigService, JWTStrategy]
})
export class AuthModule{

}