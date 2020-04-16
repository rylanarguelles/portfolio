import { decorate, observable } from 'mobx';

export class MusicStore {
    songs = undefined;
    activeSong = undefined;
}

decorate(MusicStore, {
    songs: observable,
    activeSong: observable,
});

export default new MusicStore();
