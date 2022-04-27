import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'
import { Artist } from '../schemas'

export type TrackDocument = Document & Track

@Schema()
export class Track{
    @Prop()
    name: string

    @Prop({default: 0})
    playsNumber: number

    @Prop({default: ''})
    lyrics: string

    @Prop()
    audioFile: string

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
    artists: Artist[]

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
    feats: Artist[]
}

export const TrackSchema = SchemaFactory.createForClass(Track);