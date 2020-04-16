import React from 'react';
import Grid from '@material-ui/core/Grid';
import Education from './components/Education';
import Links from './components/Links';
import WorkExperience from './components/WorkExperience';

export default class Home extends React.Component {
    render() {
        return (
            <Grid container direction='column' spacing={4}>
                <Grid item>
                    <Education />
                </Grid>
                <br></br>
                <br></br>
                <Grid item>
                    <WorkExperience />
                </Grid>
                <br></br>
                <br></br>
                <Grid item>
                    <Links />
                </Grid>
                <br></br>
                <br></br>
            </Grid>
        );
    }
}
