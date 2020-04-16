import { decorate, observable } from 'mobx';

export default class Song {
    id;

    title;

    artist;

    sounds;

    description;

    lyrics;

    uploadDate;

    constructor(song) {
        this.id = song.id;
        this.title = song.title;
        this.artist = song.artist;
        this.sounds = song.sounds;
        this.description = song.description;
        this.lyrics = song.lyrics;
        this.uploadDate = song.uploadDate;
    }
}

decorate(Song, {
    id: observable,
    title: observable,
    artist: observable,
    sounds: observable,
    description: observable,
    lyrics: observable,
    uploadDate: observable,
});
