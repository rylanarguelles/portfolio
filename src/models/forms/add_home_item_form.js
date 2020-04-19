import { decorate, observable } from 'mobx';

export default class AddHomeItemForm {
    type = 'Experience';

    title = '';

    company = '';

    year = '';
}

decorate(AddHomeItemForm, {
    type: observable,
    title: observable,
    company: observable,
    year: observable,
});
