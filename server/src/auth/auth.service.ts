import * as brcypt from 'bcrypt'
import { Injectable, ForbiddenException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User, UserDocument } from "src/schemas";
import { CreateUserDto, SignInDto } from "./dto";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

@Injectable()
export class AuthServise{

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwt: JwtService,
        private config: ConfigService
        ){}

    async create(dto: CreateUserDto){
        try{
            const hashedPassword: string = await brcypt.hash(dto.password, 5)
            dto = {...dto, password: hashedPassword}
            const user = await this.userModel.create({...dto})
            return this.signToken(user._id, user.email)
        }
        catch(e){
            return new ForbiddenException(e.message)
        }
    }

    async signin(dto: SignInDto){
        try{
            const user = await this.userModel.findOne({email: dto.email})
            const check: boolean = await brcypt.compare(dto.password, user.password)
            if (!check) return new ForbiddenException('Incorrect password')
            return this.signToken(user._id, user.email)
        }
        catch(e){
            return new ForbiddenException(e.message)
        }
    }

    async signToken(userId: string, email: string): Promise<{access_token: string}>{
        const payload: {sub: string, email: string} = {
            sub: userId,
            email
        } 

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: this.config.get('JWT_SECRET')
        })

        return {
            access_token: token
        }
    }
}