import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    dialog: {
        backgroundColor: grey[800],
    },
    text: {
        color: grey[50],
        fontFamily: 'Neue Haas Grotesk Text Pro',
    },
    icon: {
        color: grey[50],
    },
});

class SongDetailsDialog extends React.Component {
    render() {
        const { song, isOpen, classes } = this.props;
        return (
            <Dialog maxWidth='md' open={isOpen} className={classes.dialog}>
                <DialogTitle className={classes.text}>
                    Paperback Writer
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container direction='column' spacing={2}>
                        <Grid item container direction='column' spacing={2}>
                            <Grid item>
                                <Typography
                                    variant='overline'
                                    className={classes.text}
                                >
                                    Sounds & Instruments
                                </Typography>
                            </Grid>
                            <Grid item>{/* SoundsTable */}</Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.text}>
                                {/* Description */}
                            </Typography>
                        </Grid>
                        <Grid item container direction='column' spacing={2}>
                            <Grid item>
                                <Typography
                                    variant='overline'
                                    className={classes.text}
                                >
                                    Lyrics
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.text}>
                                    {/* Lyrics */}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button>
                        <Typography variant='overline' className={classes.text}>
                            Close
                        </Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(SongDetailsDialog);
