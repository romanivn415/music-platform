import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import { Track } from '../schemas'


export type RadioDocument = Document & Radio

@Schema()
export class Radio{
    @Prop()
    name: string

    @Prop()
    picture: string

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}]})
    tracks: Track[]
}

export const RadioSchema = SchemaFactory.createForClass(Radio);