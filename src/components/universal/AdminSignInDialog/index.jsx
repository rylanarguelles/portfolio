import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    title: {
        color: red[800],
        fontFamily: 'Butler',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
});

class AdminSignInDialog extends React.Component {
    render() {
        const { isOpen, close, classes } = this.props;
        return (
            <Dialog maxWidth='sm' fullWidth open={isOpen} onClose={close}>
                <Paper className={classes.details}>
                    <DialogTitle>
                        <Typography variant='h4' className={classes.title}>
                            Sign In
                        </Typography>
                    </DialogTitle>
                    <DialogContent dividers></DialogContent>
                    <DialogActions>
                        <Button onClick={close}>
                            <Typography
                                variant='overline'
                                className={classes.text}
                            >
                                Close
                            </Typography>
                        </Button>
                        <Button>
                            <Typography
                                variant='overline'
                                className={classes.text}
                            >
                                Sign In
                            </Typography>
                        </Button>
                    </DialogActions>
                </Paper>
            </Dialog>
        );
    }
}

export default withStyles(styles)(AdminSignInDialog);
