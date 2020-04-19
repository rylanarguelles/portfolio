import React from 'react';
import AdminSignInButton from './components/AdminSignInButton';
import AdminSignInDialog from '../AdminSignInDialog';
import Grid from '@material-ui/core/Grid';
import NavLink from './components/NavLink';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    navItem: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    title: {
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
    constructor(props) {
        super(props);

        this.state = {
            signInIsOpen: false,
        };

        this.handleSignIn = this.handleSignIn.bind(this);
        this.toggleSignInDialog = this.toggleSignInDialog.bind(this);
    }

    handleSignIn() {
        this.toggleSignInDialog();
    }

    toggleSignInDialog() {
        this.setState({
            signInIsOpen: !this.state.signInIsOpen,
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container direction='column' spacing={1}>
                <Grid item>
                    <Typography variant='h4' className={classes.title}>
                        O. R. ARGUELLES
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction='row'
                    justify='space-between'
                    alignItems='center'
                >
                    <Grid item>
                        <Grid container direction='row' spacing={4}>
                            <Grid item>
                                <NavLink title='Home' route='/home' />
                            </Grid>
                            <Grid item>
                                <NavLink title='Code' route='/code' />
                            </Grid>
                            <Grid item>
                                <NavLink title='Music' route='/music' />
                            </Grid>
                            <Grid item>
                                <NavLink
                                    title='Analog Photgraphy'
                                    route='/home'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <AdminSignInButton
                            openDialog={this.toggleSignInDialog}
                        />
                    </Grid>
                </Grid>
                <AdminSignInDialog
                    isOpen={this.state.signInIsOpen}
                    close={this.toggleSignInDialog}
                />
            </Grid>
        );
    }
}

export default withStyles(styles)(Navigation);
