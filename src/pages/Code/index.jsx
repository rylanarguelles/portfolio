import React from 'react';
import { inject, observer } from 'mobx-react';
import EmptyState from '../../components/reusable/EmptyState';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './components/ProjectCard';
import ProjectDetailsDialog from './components/ProjectDetailsDialog';
import CodeController from '../../controllers/code';

class Code extends React.Component {
    componentDidMount() {
        // TODO: Service for retrieving projects
    }

    constructor(props) {
        super(props);

        this.state = {
            detailsIsOpen: false,
        };

        this.toggleProjectDetailsDialog = this.toggleProjectDetailsDialog.bind(
            this,
        );
    }

    toggleProjectDetailsDialog(project) {
        this.setState({
            detailsIsOpen: !this.state.detailsIsOpen,
        });
        CodeController.setActiveProject(project);
    }

    render() {
        const { CodeStore } = this.props;
        const { projects, activeProject } = CodeStore;
        const items = projects ? Array.from(projects) : [];
        return (
            <React.Fragment>
                {items.length > 0 && (
                    <Grid
                        container
                        direction='row'
                        spacing={4}
                        justify='flex-start'
                    >
                        {items.map((i) => (
                            <Grid item key={i.id}>
                                <ProjectCard
                                    project={i}
                                    openDialog={() =>
                                        this.toggleProjectDetailsDialog(i)
                                    }
                                />
                            </Grid>
                        ))}
                        <ProjectDetailsDialog
                            activeProject={activeProject}
                            isOpen={this.state.detailsIsOpen}
                            close={() =>
                                this.toggleProjectDetailsDialog(undefined)
                            }
                        />
                    </Grid>
                )}
                {items.length === 0 && <EmptyState />}
            </React.Fragment>
        );
    }
}

export default inject('CodeStore')(observer(Code));
