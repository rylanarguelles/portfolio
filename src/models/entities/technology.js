import { decorate, observable } from 'mobx';

export default class Technology {
    name;

    constructor(technology) {
        this.name = technology.name;
    }
}

decorate(Technology, {
    name: observable,
});
