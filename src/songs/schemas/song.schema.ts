import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SongDocument = Song & Document;

@Schema()
export class Song {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [String], required: true })
  artists: string[];

  @Prop({ required: true })
  releasedDate: Date;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  lyrics: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);
