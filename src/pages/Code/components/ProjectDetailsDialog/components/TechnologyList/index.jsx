import React from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    chip: {
        backgroundColor: grey[900],
        color: grey[50],
    },
});

class TechnologyList extends React.Component {
    render() {
        const { technologies, classes } = this.props;
        return (
            <Grid container direction='row' spacing={2}>
                <Grid item>
                    <Chip label='React' className={classes.chip} />
                </Grid>
                <Grid item>
                    <Chip label='Material UI' className={classes.chip} />
                </Grid>
                <Grid item>
                    <Chip label='Mobx' className={classes.chip} />
                </Grid>
                <Grid item>
                    <Chip label='Axios' className={classes.chip} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(TechnologyList);
