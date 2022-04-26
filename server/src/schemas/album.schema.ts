import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'

export type AlbumDocument = Document & Album

@Schema()
export class Album{
    @Prop()
    name: string

    @Prop()
    cover: string

    @Prop({default: 0})
    playsNumber: number

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}], default: []})
    tracks: mongoose.Schema.Types.ObjectId[]

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}], default: []})
    atrists: mongoose.Schema.Types.ObjectId[]

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId}], default: []})
    feats: mongoose.Schema.Types.ObjectId[]

}

export const AlbumSchema = SchemaFactory.createForClass(Album);