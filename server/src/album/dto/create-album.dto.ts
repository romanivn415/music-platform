import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ObjectId } from 'mongoose'

export class CreateAlbumsDto{
    @IsNotEmpty()
    @IsString()
    name: string
    
    @IsOptional()
    cover: string

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    playsNumber?: number
    
    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    artists?: ObjectId[]

    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    tracks?: ObjectId[]

    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    feats?: ObjectId[]

    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    comments?: ObjectId[]
}