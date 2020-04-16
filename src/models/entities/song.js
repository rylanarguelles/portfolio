import { decorate, observable } from 'mobx';
import Sound from './sound';
import Reference from './reference';

export default class Song {
    id;

    title;

    artist;

    sounds;

    description;

    lyrics;

    references;

    uploadDate;

    constructor(song) {
        this.id = song.id;
        this.title = song.title;
        this.artist = song.artist;
        this.description = song.description;
        this.lyrics = song.lyrics;
        this.uploadDate = song.uploadDate;

        let sounds = [];
        let references = [];

        song.sounds.map((s) => sounds.push(new Sound(s)));
        song.references.map((r) => references.push(new Reference(r)));

        this.sounds = sounds;
        this.references = references;
    }
}

decorate(Song, {
    id: observable,
    title: observable,
    artist: observable,
    sounds: observable,
    description: observable,
    lyrics: observable,
    references: observable,
    uploadDate: observable,
});
