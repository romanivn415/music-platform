import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAlbumDto{
    @IsNotEmpty()
    @IsString()
    artist_id: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    cover: string

    @IsNotEmpty()
    @IsNumber()
    playsNomber: number

    @IsNotEmpty()
    @IsArray()
    tracks: []

    @IsNotEmpty()
    @IsArray()
    comments: []
}