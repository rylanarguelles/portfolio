import { decorate, observable } from 'mobx';

export default class Sound {

    instrument;

    effects;

    live;

    constructor(sound) {
        this.instrument = sound.instrument;
        this.effects = sound.effects;
        this.live = sound.live;
    }
}

decorate(Sound, {
    instrument: observable,
    effects: observable,
    live: observable,
});
