import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'


export type LibraryDocument = Document & Library

@Schema()
export class Library{
   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Track'}]})
   favorites: mongoose.Schema.Types.ObjectId[]

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}]})
   albums: mongoose.Schema.Types.ObjectId[]

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'EP'}]})
   EPs: mongoose.Schema.Types.ObjectId[]

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Artist'}]})
   subscribes: mongoose.Schema.Types.ObjectId[]

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Playlist'}]})
   playlists: mongoose.Schema.Types.ObjectId[]

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]})
   user: mongoose.Schema.Types.ObjectId[]
}

export const LibrarySchema = SchemaFactory.createForClass(Library);