import { ForbiddenException, Global, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ObjectId } from 'mongoose'
import { Artist, ArtistDocument } from "../schemas";
import { CreateArtistDto, UpdateArtistByIdDto } from "./dto";
import { Model } from 'mongoose'

@Injectable()
export class ArtistServise{

    constructor(
        @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>
    ){}

    async getById(id: ObjectId): Promise<Artist | ForbiddenException>{
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

    async updateById(id: ObjectId , dto: UpdateArtistByIdDto){
        try{
            const artist = await this.artistModel.findById(id)
            await artist.updateOne(dto)
            return await this.artistModel.findByIdAndUpdate(id)
        }
        catch(e){
            return new ForbiddenException(e.message)
        }
    }

    async addAlbum(album_id: ObjectId, artist_ids: ObjectId[]){
        const artists = await this.artistModel.updateMany({
            _id: {$in: artist_ids}
        }, 
        {
            $push: {
                albums: album_id
            }
        })

        return artists
    }

    async deleteById(id: ObjectId){
        try{
            const artist = await this.artistModel.findByIdAndDelete(id)
            return artist
        }
        catch(e){
            return new ForbiddenException(e.message)
        }
    }
}