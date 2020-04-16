import CodeStore from '../store/code_store';

export default class CodeController {
    static setActiveProject(project) {
        CodeStore.activeProject = project;
    }
}
