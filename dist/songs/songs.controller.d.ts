import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
    create(createSongDTO: CreateSongDto): Promise<import("./schemas/song.schema").Song>;
    findAll(): Promise<import("./schemas/song.schema").Song[]>;
    findOne(id: string): Promise<import("./schemas/song.schema").Song>;
    update(id: string, updateSongDTO: UpdateSongDto): Promise<import("./schemas/song.schema").Song>;
    delete(id: string): Promise<import("./schemas/song.schema").Song>;
}
