import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import { User } from '../schemas'

export type PlaylistDocument = Document & Playlist

@Schema()
export class Playlist{
    @Prop()
    name: string

    @Prop()
    picture: string

    @Prop({default: 0})
    playsNumber: number

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
    comments: Comment[]

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
    user: User
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);