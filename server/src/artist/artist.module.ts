import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Artist, ArtistSchema } from "../schemas";
import { ArtistController } from "./artist.controller";
import { ArtistServise } from "./artist.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Artist.name, schema: ArtistSchema}])
    ],
    controllers: [ArtistController],
    providers: [ArtistServise]
})
export class ArtistModule{}