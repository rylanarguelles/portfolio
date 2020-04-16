import { decorate, observable } from 'mobx';

export class CodeStore {
    projects = undefined;
    activeProject = undefined;
}

decorate(CodeStore, {
    projects: observable,
    activeProject: observable,
});

export default new CodeStore();
