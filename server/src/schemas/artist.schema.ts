import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'
import { Album } from '../schemas'

export type ArtistDocument = Document & Artist

@Schema()
export class Artist{
  @Prop()
  name: string

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}]})
  albums: Album[]


}

export const ArtistSchema = SchemaFactory.createForClass(Artist);