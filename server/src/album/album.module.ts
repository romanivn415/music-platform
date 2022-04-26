import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { Album, AlbumSchema } from '../schemas';
import { FileService } from '../file/file.service';

@Module({
    imports: [ MongooseModule.forFeature([{name: Album.name, schema: AlbumSchema}]) ],
    controllers: [AlbumController],
    providers: [AlbumService, FileService]
})
export class AlbumModule{}