import MusicStore from '../store/music_store';

export default class MusicController {
    static setActiveSong(song) {
        MusicStore.activeSong = song;
    }
}
