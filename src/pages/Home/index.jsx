import React from 'react';
import { inject, observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Education from './components/Education';
import Links from './components/Links';
import WorkExperience from './components/WorkExperience';

class Home extends React.Component {
    componentDidMount() {
        // TODO: Service for retrieving education and experience items
    }

    render() {
        const { HomeStore } = this.props;
        const { educationItems, experienceItems } = HomeStore;
        return (
            <Grid container direction='row' spacing={4} justify='space-between'>
                {educationItems && (
                    <Grid item>
                        <Education educationItems={educationItems} />
                    </Grid>
                )}
                {experienceItems && (
                    <Grid item>
                        <WorkExperience experienceItems={experienceItems} />
                    </Grid>
                )}
                <Grid item>
                    <Links />
                </Grid>
            </Grid>
        );
    }
}

export default inject('HomeStore')(observer(Home));
