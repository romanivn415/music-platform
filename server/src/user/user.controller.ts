import { Controller, Post, Body } from "@nestjs/common";
import { User } from "src/schemas";
import { CreateUserDto } from './dto'

@Controller('user')
export class UserController{
    @Post()
    async create(@Body() dto: CreateUserDto){
    }
}