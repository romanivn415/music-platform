import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateArtistDto{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsArray()
    albums: []

    @IsArray()
    EPs: []
}