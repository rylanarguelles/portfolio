import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    card: {
        width: 240,
        backgroundColor: grey[800],
    },
    text: {
        color: grey[50],
        fontFamily: 'Neue Haas Grotesk Text Pro',
    },
});

class SongCard extends React.Component {
    render() {
        const { song, classes } = this.props;
        return (
            <Card variant='outlined' className={classes.card}>
                <CardContent>
                    <Typography variant='caption' className={classes.text}>
                        20 April 2020
                    </Typography>
                    <Typography variant='h6' className={classes.text}>
                        Paperback Writer
                    </Typography>
                    <Typography variant='overline' className={classes.text}>
                        The Beatles
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container direction='row' spacing={2}>
                        <Grid item>
                            <Button>
                                <Typography
                                    variant='overline'
                                    className={classes.text}
                                >
                                    Play
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button>
                                <Typography
                                    variant='overline'
                                    className={classes.text}
                                >
                                    Learn More
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(SongCard);
