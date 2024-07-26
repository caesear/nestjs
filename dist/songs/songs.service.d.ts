import { CreateSongDto } from './dto/create-song.dto';
import { Song, SongDocument } from './schemas/song.schema';
import { Connection, Model } from 'mongoose';
import { UpdateSongDto } from './dto/update-song.dto';
export declare class SongsService {
    private songModel;
    private connection;
    constructor(songModel: Model<SongDocument>, connection: Connection);
    create(createSongDto: CreateSongDto): Promise<Song>;
    findAll(): Promise<Song[]>;
    findOne(id: string): Promise<Song>;
    update(id: string, updateSongDto: UpdateSongDto): Promise<Song>;
    delete(id: string): Promise<Song>;
}
