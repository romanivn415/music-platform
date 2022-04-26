import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'
import { Album } from '../schemas'
import { EP } from './ep.schema'

export type ArtistDocument = Document & Artist

@Schema()
export class Artist{
  @Prop({unique: true})
  name: string

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}]})
  albums: mongoose.Schema.Types.ObjectId[]

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId}], ref: 'EP'})
  EPs: mongoose.Schema.Types.ObjectId[]
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);