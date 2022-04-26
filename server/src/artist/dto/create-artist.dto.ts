import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { ObjectId } from 'mongoose'

export class CreateArtistDto{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsArray()
    albums: ObjectId[]

    @IsArray()
    EPs: ObjectId[]
}