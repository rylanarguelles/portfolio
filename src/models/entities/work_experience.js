import { decorate, observable } from 'mobx';

export default class WorkExperience {
    id;

    position;

    company;

    year;

    constructor(workExperience) {
        this.id = workExperience.id;
        this.position = workExperience.position;
        this.company = workExperience.company;
        this.year = workExperience.year;
    }
}

decorate(WorkExperience, {
    id: observable,
    position: observable,
    company: observable,
    year: observable,
});
