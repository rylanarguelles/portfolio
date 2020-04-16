import React from 'react';
import Button from '@material-ui/core/Button';
import DetailPanel from './components/DetailPanel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SoundsTable from './components/SoundsTable';
import ReferencesTable from './components/ReferencesTable';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    details: {
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
        const { activeSong, isOpen, close, classes } = this.props;
        return (
            <Dialog maxWidth='sm' fullWidth open={isOpen} onClose={close}>
                <Paper className={classes.details}>
                    <DialogTitle className={classes.text}>
                        Paperback Writer
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <Typography className={classes.text}>
                                    This is a sample description. Not much will
                                    be here.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <DetailPanel
                                    title='Sounds & Instruments'
                                    component={<SoundsTable />}
                                />
                            </Grid>
                            <Grid item>
                                <DetailPanel
                                    title='References'
                                    component={<ReferencesTable />}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={close}>
                            <Typography
                                variant='overline'
                                className={classes.text}
                            >
                                Close
                            </Typography>
                        </Button>
                    </DialogActions>
                </Paper>
            </Dialog>
        );
    }
}

export default withStyles(styles)(SongDetailsDialog);
