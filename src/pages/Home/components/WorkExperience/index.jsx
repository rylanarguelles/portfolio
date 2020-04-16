import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    root: {
        width: 420,
    },
    text: {
        color: grey[50],
        fontFamily: 'Neue Haas Grotesk Text Pro',
    },
});

class WorkExperience extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction='column'
                spacing={1}
                className={classes.root}
            >
                <Grid item>
                    <Typography variant='h6' className={classes.text}>
                        Experience
                    </Typography>
                </Grid>
                <Grid item container spacing={3}>
                    <Grid item container direction='column'>
                        <Grid item>
                            <Typography className={classes.text}>
                                Letter Automation Project Managment Officer
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant='caption'
                                className={classes.text}
                            >
                                UNILEVER 2019
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction='column'>
                        <Grid item>
                            <Typography className={classes.text}>
                                Full Stack Web Developer Intern
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant='caption'
                                className={classes.text}
                            >
                                QWIKWIRE BILLING SYSTEMS, INC. 2019
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(WorkExperience);
