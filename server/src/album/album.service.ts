import { ForbiddenException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album, AlbumDocument, Artist, ArtistDocument } from '../schemas';
import { CreateAlbumDto } from './dto';

@Injectable()
export class AlbumService{
    constructor(
        @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
        @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>
        ){}

    async getByAtristId(id: string){
        try{
            const artist = await this.artistModel.findById(id).populate('Album')
            const {albums} = artist
            return albums
        }
        catch(e){
            new ForbiddenException(e.message)
        }
    }

    async getById(id: string): Promise<Album | ForbiddenException>{
        try{
            return await this.albumModel.findById(id)
        }
        catch(e){
            new ForbiddenException(e.message)
        }
    }
    
    async create(dto: CreateAlbumDto): Promise<Album | ForbiddenException>{
        try{
            const {artist_id}: {artist_id: string} = dto
            delete dto.artist_id

            const newAlbum = await this.albumModel.create({...dto})
            const artist = await this.artistModel.findById(artist_id)
            artist.albums.push(newAlbum._id)
            await artist.save()

            return newAlbum
        }
        catch(e){
            return new ForbiddenException(e.message)
        }
    }
}