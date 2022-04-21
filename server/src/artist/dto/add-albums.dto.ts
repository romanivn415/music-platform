import { IsArray, IsNotEmpty, IsString } from 'class-validator'
import { ObjectId } from 'mongoose'
import { Album } from '../../schemas'

export class AddAlbumsDto{
    @IsNotEmpty()
    @IsString()
    artist_id: ObjectId

    @IsNotEmpty()
    @IsArray()
    albums: Album[]
}