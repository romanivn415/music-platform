import { ForbiddenException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { FileService, FileTypes } from 'src/file/file.service';
import { Album, AlbumDocument } from '../schemas';
import { CreateAlbumsDto } from './dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumService{
    constructor(
        @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
        private fileService: FileService
        ){}

    async getById(id: ObjectId): Promise<Album | ForbiddenException>{
        try{
            return await this.albumModel.findById(id)
        }
        catch(e){
            new ForbiddenException(e.message)
        }
    }
    
    async create(
        dto: CreateAlbumsDto, file: Express.Multer.File
    ): 
        Promise<Album | ForbiddenException>
    {
        try{
            const coverImagePath = this.fileService.createFile(FileTypes.IMAGE, file)
            dto.cover = coverImagePath
            const newAlbum = await this.albumModel.create(dto)
            return newAlbum
        }
        catch(e){
            return new ForbiddenException(e.message)
        }
    }

    async update(id: ObjectId ,dto: UpdateAlbumDto): Promise<Album | ForbiddenException>{
        try{
            const album = await this.albumModel.findByIdAndUpdate(id, dto)
            return album
        }
        catch(e){
            return new ForbiddenException(e.message)
        }
    }

    async deleteById(id: ObjectId): Promise<Album | ForbiddenException>{
        try{
            const album = await this.albumModel.findOneAndDelete({_id: id})
            return album
        }
        catch(e){
            return new ForbiddenException(e.message)
        }
    }
}