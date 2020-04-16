import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
    navItem: {
        color: red[800],
        fontFamily: 'Butler',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
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
                            <Link to='/home' className={classes.link}>
                                <Typography className={classes.navItem}>
                                    Home
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to='' className={classes.link}>
                                <Typography className={classes.navItem}>
                                    Code
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to='/music' className={classes.link}>
                                <Typography className={classes.navItem}>
                                    Music
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to='' className={classes.link}>
                                <Typography className={classes.navItem}>
                                    Analog Photography
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Navigation);
