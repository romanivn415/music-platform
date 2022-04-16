import { Module } from "@nestjs/common";
import {MongooseModule} from '@nestjs/mongoose'
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path'
import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";


@Module({
    controllers: [AppController],
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.hzbnm.mongodb.net/music-platform?retryWrites=true&w=majority'),
        UserModule
    ]
})
export class AppModule {

}