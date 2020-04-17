import { decorate, observable } from 'mobx';
import Sound from './sound';
import Reference from './reference';

export default class Song {
    id;

    title;

    artist;

    sounds;

    description;

    references;

    uploadDate;

    url;

    constructor(song) {
        this.id = song.id;
        this.title = song.title;
        this.artist = song.artist;
        this.description = song.description;
        this.uploadDate = song.upload_date;
        this.url = song.url;

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
    references: observable,
    uploadDate: observable,
    url: observable,
});
