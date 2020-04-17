import { decorate, observable } from 'mobx';

export default class Education {
    id;

    title;

    institution;

    graduationYear;

    constructor(education) {
        this.id = education.id;
        this.title = education.title;
        this.institution = education.institution;
        this.graduationYear = education.graduationYear;
    }
}

decorate(Education, {
    id: observable,
    title: observable,
    institution: observable,
    graduationYear: observable,
});
