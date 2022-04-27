import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ObjectId } from 'mongoose'
import { JwtGuard } from "src/auth/guard";
import { CreateTrackDto, UpdateTrackDto } from "./dto";
import { TrackService } from "./track.service";

@UseGuards(JwtGuard)
@Controller('tracks')
export class TrackController{
    constructor(private trackService: TrackService){}

    @Get('/:id')
    getById(@Param('id') id: ObjectId){
        return this.trackService.getById(id)
    }

    @Post('create')
    @UseInterceptors(FileInterceptor('audio'))
    create(@UploadedFile() file: Express.Multer.File, @Body() dto: CreateTrackDto){
        return this.trackService.create(file, dto)
    }

    @Put('update/:id')
    @UseInterceptors(FileInterceptor('audioFile'))
    update(
        @UploadedFile() file: Express.Multer.File, 
        @Body() dto: UpdateTrackDto,
        @Param('id') id: ObjectId
    ){
        return this.trackService.update(id, dto, file)
    }

    @Delete('delete/:id')
    deleteById(@Param('id') id: ObjectId){
        return this.trackService.deleteById(id)
    }
}