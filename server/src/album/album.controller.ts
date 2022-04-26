import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile,  UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ObjectId } from 'mongoose'
import { AlbumService } from "./album.service";
import { JwtGuard } from "../auth/guard";
import { CreateAlbumsDto } from "./dto";
import { UpdateAlbumDto } from "./dto/update-album.dto";

@UseGuards(JwtGuard)
@Controller('albums')
export class AlbumController{
    constructor(
        private albumSevice: AlbumService,
        ){}

    @Get(':id')
    getById(@Param('id') id: ObjectId){
        return this.albumSevice.getById(id)
    }

    @Post('create')
    @UseInterceptors(FileInterceptor('cover'))
    async create(@UploadedFile() file: Express.Multer.File,  @Body() dto: CreateAlbumsDto){
        return await this.albumSevice.create(dto, file)
    }

    @Put('update/:id')
    update(@Param('id') id: ObjectId, @Body() dto: UpdateAlbumDto){
        return this.albumSevice.update(id, dto)
    }

    @Delete('delete/:id')
    delete(@Param('id') id: ObjectId){
        return this.albumSevice.deleteById(id)
    }

}