import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    root: {
        width: 360,
    },
    text: {
        color: grey[50],
        fontFamily: 'Neue Haas Grotesk Text Pro',
    },
});

class Education extends React.Component {
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
                        Education
                    </Typography>
                </Grid>
                <Grid item container spacing={3}>
                    <Grid item container direction='column'>
                        <Grid item>
                            <Typography className={classes.text}>
                                Masters in Information Technology
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant='caption'
                                className={classes.text}
                            >
                                UNIVERSITY OF TECHNOLOGY SYDNEY 2022
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction='column'>
                        <Grid item>
                            <Typography className={classes.text}>
                                Bachelor of Science in Information Systems
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant='caption'
                                className={classes.text}
                            >
                                DE LA SALLE UNIVERSITY MANILA 2019
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Education);
