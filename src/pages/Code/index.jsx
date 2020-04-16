import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './components/ProjectCard';

export default class Code extends React.Component {
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
            </Grid>
        );
    }
}
