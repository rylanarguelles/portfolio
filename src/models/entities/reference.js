import { decorate, observable } from 'mobx';

export default class Reference {
    id;

    name;

    link;

    constructor(reference) {
        this.id = reference.id;
        this.name = reference.name;
        this.link = reference.link;
    }
}

decorate(Reference, {
    id: observable,
    name: observable,
    link: observable,
});
