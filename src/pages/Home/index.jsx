import React from 'react';
import Grid from '@material-ui/core/Grid';
import Education from './components/Education';
import Links from './components/Links';
import WorkExperience from './components/WorkExperience';

export default class Home extends React.Component {
    render() {
        return (
            <Grid container direction='row' spacing={4} justify='space-between'>
                <Grid item>
                    <Education />
                </Grid>
                <Grid item>
                    <WorkExperience />
                </Grid>
                <Grid item>
                    <Links />
                </Grid>
            </Grid>
        );
    }
}
