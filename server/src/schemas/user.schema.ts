import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import Roles from 'src/types/roles.enum'

export type UserDocument = Document & User

@Schema()
export class User{
    @Prop()
    name: string

    @Prop()
    roles: Roles[]

    @Prop({unique: true})
    email: string

    @Prop()
    password: string

    @Prop()
    avatar: string
}

export const UserSchema = SchemaFactory.createForClass(User);