import React from 'react';
import Divider from '@material-ui/core/Divider';
// import Home from './pages/Home';
import Music from './pages/Music';
import Navigation from './components/universal/Navigation';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    root: {
        height: '100%',
        padding: '64px',
        backgroundColor: grey[50],
    },
});

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Navigation />
                <br></br>
                <br></br>
                <Divider />
                <br></br>
                <br></br>
                {/* <Home /> */}
                <Music />
            </div>
        );
    }
}

export default withStyles(styles)(App);
