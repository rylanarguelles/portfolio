import { computed, decorate, observable } from 'mobx';

export class MusicStore {
    songs = undefined;
    activeSong = undefined;
    songPlaying = false;
}

decorate(MusicStore, {
    songs: observable,
    activeSong: observable,
    songPlaying: observable,
});

export default new MusicStore();
