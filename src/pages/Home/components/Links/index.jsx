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
                    <a
                        href='https://www.linkedin.com/in/rylanarguelles/'
                        target='_blank'
                    >
                        <IconButton className={classes.icon}>
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                </Grid>
                <Grid item>
                    <a href='https://github.com/rylanarguelles' target='_blank'>
                        <IconButton className={classes.icon}>
                            <GithubIcon />
                        </IconButton>
                    </a>
                </Grid>
                <Grid item>
                    <a
                        href='https://www.instagram.com/rylanarguelles/'
                        target='_blank'
                    >
                        <IconButton className={classes.icon}>
                            <InstagramIcon />
                        </IconButton>
                    </a>
                </Grid>
                <Grid item>
                    <a href='mailto:rylanarguelles@gmail.com'>
                        <IconButton className={classes.icon}>
                            <MailIcon />
                        </IconButton>
                    </a>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Links);
