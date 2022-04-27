import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { TrackController } from './track.controller';
import { FileService } from '../file/file.service';
import { TrackService } from './track.service';
import { Track, TrackSchema } from '../schemas';

@Module({
    imports: [MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}])],
    controllers: [TrackController],
    providers: [TrackService, FileService]
})
export class TrackModule{}