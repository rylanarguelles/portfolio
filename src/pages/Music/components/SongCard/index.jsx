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
        width: 302,
        backgroundColor: grey[200],
    },
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
});

class SongCard extends React.Component {
    render() {
        const { song, openDialog, classes } = this.props;
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
                    <iframe
                        width='100%'
                        height='166'
                        scrolling='no'
                        frameborder='no'
                        allow='autoplay'
                        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340583320&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
                    ></iframe>
                </CardContent>
                <CardActions>
                    <Grid
                        container
                        direction='row'
                        spacing={2}
                        alignItems='center'
                    >
                        <Grid item>
                            <Button onClick={openDialog}>
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
