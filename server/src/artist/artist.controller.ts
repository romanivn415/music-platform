import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { JwtGuard } from 'src/auth/guard';
import { ArtistServise } from './artist.service';
import {  CreateArtistDto, UpdateArtistByIdDto } from './dto';

@UseGuards(JwtGuard)
@Controller('artists')
export class ArtistController{

    constructor(
        private artistService: ArtistServise
        ){}

    @Get(':id')
    getById(@Param('id') id: ObjectId){
        return this.artistService.getById(id)
    }

    @Post('create')
    create(@Body() dto: CreateArtistDto){
        return this.artistService.create(dto)
    }

    @Put('update/:id')
    update(@Param('id') id: ObjectId, @Body() dto: UpdateArtistByIdDto){
        return this.artistService.updateById(id, dto)
    }

    @Patch('addAlbum/:id')
    addAlbum(@Param('id') id: ObjectId, @Body('ids') ids: ObjectId[]){
        return this.artistService.addAlbum(id, ids)
    }

    @Delete('delete/:id')
    deleteById(@Param('id') id: ObjectId){
        return this.artistService.deleteById(id)
    }
}