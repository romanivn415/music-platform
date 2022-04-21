import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Album, Artist, ArtistDocument } from "../schemas";
import { AddAlbumsDto, CreateArtistDto } from "./dto";
import { Model } from 'mongoose'

@Injectable()
export class ArtistServise{

    constructor(
        @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>
    ){}

    async getById(id: string): Promise<Artist | ForbiddenException>{
        try{
            const artist = await this.artistModel.findById(id)
            return artist
        }
        catch(e){
            return new ForbiddenException(e.message)
        }
    }

    async create(dto: CreateArtistDto): Promise<Artist | ForbiddenException>{
        try{
            const newArtist = await this.artistModel.create({...dto})
            return newArtist
        }
        catch(e){
            return new ForbiddenException(e.message)
        }
    }

    async addAlbums(dto: AddAlbumsDto){
        const {artist_id, albums} = dto

        const artist = await this.artistModel.findById(artist_id)
        artist.albums.push(...albums)
        await artist.save()

        return artist
    }
}