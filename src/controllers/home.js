import HomeStore from '../store/home_store';

export default class HomeController {
    static resetAddForm() {
        HomeStore.addHomeItemForm.resetForm();
    }
}
