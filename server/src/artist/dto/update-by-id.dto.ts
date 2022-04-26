import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { ObjectId } from 'mongoose'


export class UpdateArtistByIdDto{
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string

    @IsOptional()
    @IsArray()
    albums?: ObjectId[]

    @IsOptional()
    @IsArray()
    EPs?: ObjectId[]
}