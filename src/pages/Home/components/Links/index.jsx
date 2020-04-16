import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    root: {
        width: 360,
    },
    icon: {
        color: grey[900],
    },
});

class Links extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction='row'
                spacing={2}
                className={classes.root}
            >
                <Grid item>
                    <IconButton className={classes.icon}>
                        <LinkedInIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton className={classes.icon}>
                        <GithubIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton className={classes.icon}>
                        <InstagramIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton className={classes.icon}>
                        <MailIcon />
                    </IconButton>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Links);
