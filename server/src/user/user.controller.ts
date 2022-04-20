import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { User } from '../schemas';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(JwtGuard)
export class UserController {

    constructor(private userService: UserService){}

    @Get('me')
    getMe(@GetUser() user: User){
        return user
    }
}
