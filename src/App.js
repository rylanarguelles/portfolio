import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Home from './pages/Home';
import Music from './pages/Music';
import Navigation from './components/universal/Navigation';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    root: {
        height: '100vh',
        padding: '64px',
        backgroundColor: grey[900],
    },
});

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container direction='column' className={classes.root}>
                <Grid item>
                    <Navigation />
                </Grid>
                <br></br>
                <br></br>
                <Grid item>
                    {/* <Home /> */}
                    <Music />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(App);
