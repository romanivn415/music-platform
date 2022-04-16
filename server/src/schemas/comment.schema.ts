import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import { User } from '../schemas'

export type CommentDocument = Document & Comment

@Schema()
export class Comment{
   @Prop()
   comment: string

   @Prop({type: mongoose.Schema.Types.ObjectId})
   user: User[]

}

export const CommentSchema = SchemaFactory.createForClass(Comment);