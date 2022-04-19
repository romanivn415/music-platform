import * as path from 'path'
import 'dotenv/config'
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from "@nestjs/serve-static";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from './user/user.module';


@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        MongooseModule.forRoot(process.env.DB),
        ConfigModule.forRoot({}),
        AuthModule,
        UserModule,
    ]
})
export class AppModule {

}
