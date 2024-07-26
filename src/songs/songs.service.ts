import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { CreateSongDto } from './dto/create-song.dto';
import { Song, SongDocument } from './schemas/song.schema';
import { Connection, Model } from 'mongoose';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) private songModel: Model<SongDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  async create(createSongDto: CreateSongDto): Promise<Song> {
    //createSongDto.releasedDate = songDTO.releasedDate;
    const createdSong = new this.songModel(createSongDto);
    return createdSong.save();
  }

  async findAll(): Promise<Song[]> {
    return this.songModel.find().exec();
  }

  async findOne(id: string): Promise<Song> {
    return this.songModel.findById(id).exec();
  }

  async update(id: string, updateSongDto: UpdateSongDto): Promise<Song> {
    return this.songModel
      .findByIdAndUpdate(id, updateSongDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Song> {
    return this.songModel.findByIdAndDelete(id).exec();
  }
}
