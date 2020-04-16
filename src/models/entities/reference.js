import { decorate, observable } from 'mobx';

export default class Reference {
    id;

    name;

    link;

    creator;

    constructor(reference) {
        this.id = reference.id;
        this.name = reference.name;
        this.link = reference.link;
        this.creator = reference.creator;
    }
}

decorate(Reference, {
    id: observable,
    name: observable,
    link: observable,
    creator: observable,
});
