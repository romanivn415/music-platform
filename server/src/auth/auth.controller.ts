import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthServise } from "./auth.service";
import { CreateUserDto, SignInDto } from "./dto";

@Controller('/auth')
export class AuthController{

    constructor(private authService: AuthServise){}

    @Post('/signup')
    singup(@Body() dto: CreateUserDto){
        return this.authService.create(dto)
    }
    
    @HttpCode(HttpStatus.OK)
    @Post('/signin')
    signin(@Body() dto: SignInDto){
        return this.authService.signin(dto)
    }
}