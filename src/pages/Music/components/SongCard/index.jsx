import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    card: {
        width: 240,
        backgroundColor: grey[200],
    },
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
    icon: {
        color: grey[900],
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
                </CardContent>
                <CardActions>
                    <Grid
                        container
                        direction='row'
                        spacing={2}
                        alignItems='center'
                    >
                        <Grid item>
                            <IconButton className={classes.icon}>
                                <PlayArrowIcon />
                            </IconButton>
                        </Grid>
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
