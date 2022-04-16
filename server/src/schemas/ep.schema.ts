import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import { Track, Artist } from '../schemas'

export type EPDocument = Document & EP

@Schema()
export class EP{
    @Prop()
    name: string

    @Prop()
    cover: string

    @Prop({default: 0})
    playsNumber: number

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
    tracks: Track[]

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
    atrists: Artist[]

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
    feats: Artist[]

}

export const EPSchema = SchemaFactory.createForClass(EP);