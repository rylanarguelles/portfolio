import { decorate, observable } from 'mobx';

export class HomeStore {
    educationItems = undefined;
    experienceItems = undefined;
}

decorate(HomeStore, {
    educationItems: observable,
    experienceItems: observable,
});

export default new HomeStore();
