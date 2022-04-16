import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'
import { User, Playlist, Album, EP, Artist, Track } from '../schemas'


export type LibraryDocument = Document & Library

@Schema()
export class Library{
   @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
   favorites: Track[]

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
   albums: (Album | EP)[]

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
   subscribes: Artist[]

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
   playlists: Playlist[]

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
   user: User[]
}

export const LibrarySchema = SchemaFactory.createForClass(Library);