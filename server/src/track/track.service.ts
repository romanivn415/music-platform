import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ObjectId, Model } from 'mongoose'
import { FileService, FileTypes } from "../file/file.service";
import { Track, TrackDocument } from "../schemas";
import { CreateTrackDto, UpdateTrackDto } from "./dto";

@Injectable()
export class TrackService{
    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        private fileServise: FileService
        ){}
    async getById(id: ObjectId): Promise<Track>{
        try{
            const track: Track = await this.trackModel.findById(id)
            return track
        }
        catch(e){
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async create(file: Express.Multer.File, dto: CreateTrackDto): Promise<Track>{
        try{
            const filePath: string = this.fileServise.createFile(FileTypes.AUDIO, file)
            dto.audioFile = filePath
            const track: Track = await this.trackModel.create(dto)
            return track
        }
        catch(e){
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async update(id: ObjectId, 
                dto: UpdateTrackDto, 
                file: Express.Multer.File | null = null){
        try{
            const track: Track = await this.trackModel.findById(id)
            if (file){
                const filePath: string = this.fileServise.updateFile(FileTypes.AUDIO, file, track.audioFile)
                dto.audioFile = filePath
            }
            await this.trackModel.updateOne({_id: id}, dto)
            return await this.trackModel.findById(id)
        }
        catch(e){
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async deleteById(id: ObjectId): Promise<Track>{
        try{
            const track: Track = await this.trackModel.findByIdAndDelete(id)
            this.fileServise.removeFile(track.audioFile)
            return track
        }
        catch(e){
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}