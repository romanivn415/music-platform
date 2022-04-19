import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"


const start = async () => {
    try{
        const PORT = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule)
        app.enableCors()
        app.useGlobalPipes(new ValidationPipe({
            whitelist: true
        }))
        await app.listen(PORT, () => console.log('Has been started on port ' + PORT))
    } catch(e){
        console.log(e)
    }
}

start()