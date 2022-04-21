import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guard";
import { AlbumService } from "./album.service";
import { CreateAlbumDto } from "./dto";

@UseGuards(JwtGuard)
@Controller('albums')
export class AlbumController{
    constructor(private albumSevice: AlbumService){}

    @Get('artist/:id')
    getByArtistId(@Param('id') id: string){
        
    }

    @Get(':id')
    getById(@Param('id') id: string){
        return this.albumSevice.getById(id)
    }

    @Post('create')
    create(@Body() dto: CreateAlbumDto){
        return this.albumSevice.create(dto)
    }

}