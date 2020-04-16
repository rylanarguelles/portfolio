import { decorate, observable } from 'mobx';

export default class Sound {
    id;

    instrument;

    effects;

    live;

    constructor(sound) {
        this.id = sound.id;
        this.instrument = sound.instrument;
        this.effects = sound.effects;
        this.live = sound.live;
    }
}

decorate(Sound, {
    id: observable,
    instrument: observable,
    effects: observable,
    live: observable,
});
