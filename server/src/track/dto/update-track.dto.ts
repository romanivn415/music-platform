import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { ObjectId } from 'mongoose'

export class UpdateTrackDto{
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    audioFile?: string

    @IsOptional()
    @IsNumber()
    playsNumber?: number

    @IsOptional()
    @IsString()
    lyrics?: string

    @IsOptional()
    @IsArray()
    artists?: ObjectId[]

    @IsOptional()
    @IsArray()
    comments?: ObjectId[]
}