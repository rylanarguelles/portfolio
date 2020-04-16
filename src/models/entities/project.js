import { decorate, observable } from 'mobx';
import Technology from './technology';

export default class Project {
    id;

    name;

    year;

    description;

    role;

    technologies;

    constructor(project) {
        this.id = project.id;
        this.name = project.name;
        this.year = project.year;
        this.description = project.description;
        this.role = project.role;

        let technologies = [];
        project.technologies.map((t) => technologies.push(new Technology(t)));
        this.technologies = technologies;
    }
}

decorate(Project, {
    id: observable,
    name: observable,
    year: observable,
    description: observable,
    role: observable,
    technologies: observable,
});
