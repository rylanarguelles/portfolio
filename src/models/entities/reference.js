import { decorate, observable } from 'mobx';

export default class Reference {
    name;

    link;

    creator;

    constructor(reference) {
        this.name = reference.name;
        this.link = reference.link;
        this.creator = reference.creator;
    }
}

decorate(Reference, {
    name: observable,
    link: observable,
    creator: observable,
});
