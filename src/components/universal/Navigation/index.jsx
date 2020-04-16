import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    navItem: {
        color: red[800],
        fontFamily: 'Butler',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
});

class Navigation extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Typography variant='h4' className={classes.navItem}>
                        O. R. ARGUELLES
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container direction='row' spacing={4}>
                        <Grid item>
                            <Typography className={classes.navItem}>
                                Home
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.navItem}>
                                Code
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.navItem}>
                                Music
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.navItem}>
                                Analog Photography
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Navigation);
