import { Document } from 'mongoose';
export type SongDocument = Song & Document;
export declare class Song {
    title: string;
    artists: string[];
    releasedDate: Date;
    duration: string;
    lyrics: string;
}
export declare const SongSchema: import("mongoose").Schema<Song, import("mongoose").Model<Song, any, any, any, Document<unknown, any, Song> & Song & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Song, Document<unknown, {}, import("mongoose").FlatRecord<Song>> & import("mongoose").FlatRecord<Song> & {
    _id: import("mongoose").Types.ObjectId;
}>;
