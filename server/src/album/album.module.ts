import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema, Artist, ArtistSchema } from '../schemas';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Album.name, schema: AlbumSchema}, 
            {name: Artist.name, schema: ArtistSchema},
        ]),
    ],
    controllers: [AlbumController],
    providers: [AlbumService]
})
export class AlbumModule{}