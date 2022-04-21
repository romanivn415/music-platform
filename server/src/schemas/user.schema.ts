import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import Roles from '../types/roles.enum'

export type UserDocument = Document & User

@Schema()
export class User{
    @Prop()
    name: string

    @Prop({default: [Roles.USER]})
    roles: Roles[]

    @Prop({unique: true, lowercase: true})
    email: string

    @Prop()
    password: string

    @Prop()
    avatar: string
}

export const UserSchema = SchemaFactory.createForClass(User);