import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { JwtGuard } from 'src/auth/guard';
import { ArtistServise } from './artist.service';
import { CreateArtistDto } from './dto';

@UseGuards(JwtGuard)
@Controller('artists')
export class ArtistController{

    constructor(private artistService: ArtistServise){}

    @Get(':id')
    getById(@Param('id') id: string){
        return this.artistService.getById(id)
    }

    @Post('create')
    create(@Body() dto: CreateArtistDto){
        return this.artistService.create(dto)
    }
}