import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
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
    buttonText: {
        color: red[800],
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
                        {song.uploadDate}
                    </Typography>
                    <Typography variant='h6' className={classes.text}>
                        {song.title}
                    </Typography>
                    <Typography variant='overline' className={classes.text}>
                        {song.artist}
                    </Typography>
                    <iframe
                        width='100%'
                        height='166'
                        scrolling='no'
                        frameborder='no'
                        allow='autoplay'
                        src={song.url}
                    ></iframe>
                </CardContent>
                <CardActions>
                    <Button onClick={openDialog}>
                        <Typography
                            variant='overline'
                            className={classes.buttonText}
                        >
                            Learn More
                        </Typography>
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(SongCard);
