import React from 'react';
import { inject, observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './components/ProjectCard';
import ProjectDetailsDialog from './components/ProjectDetailsDialog';

class Code extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detailsIsOpen: false,
        };

        this.toggleProjectDetailsDialog = this.toggleProjectDetailsDialog.bind(
            this,
        );
    }

    toggleProjectDetailsDialog() {
        this.setState({
            detailsIsOpen: !this.state.detailsIsOpen,
        });
    }

    render() {
        const { CodeStore } = this.props;
        const { activeProject } = CodeStore;
        return (
            <Grid container direction='row' spacing={4} justify='flex-start'>
                <Grid item>
                    <ProjectCard openDialog={this.toggleProjectDetailsDialog} />
                </Grid>
                <Grid item>
                    <ProjectCard openDialog={this.toggleProjectDetailsDialog} />
                </Grid>
                <Grid item>
                    <ProjectCard openDialog={this.toggleProjectDetailsDialog} />
                </Grid>
                <Grid item>
                    <ProjectCard openDialog={this.toggleProjectDetailsDialog} />
                </Grid>
                <Grid item>
                    <ProjectCard openDialog={this.toggleProjectDetailsDialog} />
                </Grid>
                <Grid item>
                    <ProjectCard openDialog={this.toggleProjectDetailsDialog} />
                </Grid>
                <ProjectDetailsDialog
                    activeProject={activeProject}
                    isOpen={this.state.detailsIsOpen}
                    close={this.toggleProjectDetailsDialog}
                />
            </Grid>
        );
    }
}

export default inject('CodeStore')(observer(Code));
