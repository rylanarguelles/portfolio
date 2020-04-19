import { decorate, observable } from 'mobx';
import AddHomeItemForm from '../../models/forms/add_home_item_form';

export class AddHomeItemFormState {
    form = new AddHomeItemForm();

    resetForm() {
        this.form = new AddHomeItemForm();
    }
}

decorate(AddHomeItemFormState, {
    form: observable,
});

export default new AddHomeItemFormState();
