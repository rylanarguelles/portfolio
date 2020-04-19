import { decorate, observable } from 'mobx';
import addHomeItemFormState from './home/add_home_item_form';

export class HomeStore {
    educationItems = undefined;
    experienceItems = undefined;
    addHomeItemForm = addHomeItemFormState;
}

decorate(HomeStore, {
    educationItems: observable,
    experienceItems: observable,
    addHomeItemForm: observable,
});

export default new HomeStore();
