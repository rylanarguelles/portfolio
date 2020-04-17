import React from 'react';
import Button from '@material-ui/core/Button';
import DetailPanel from '../../../../components/reusable/DetailPanel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TechnologyList from './components/TechnologyList';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    details: {
        backgroundColor: grey[200],
    },
    title: {
        color: red[800],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
    icon: {
        color: grey[50],
    },
});

class ProjectDetailsDialog extends React.Component {
    render() {
        const { activeProject, isOpen, close, classes } = this.props;
        return (
            <Dialog maxWidth='sm' fullWidth open={isOpen} onClose={close}>
                <Paper className={classes.details}>
                    <DialogTitle>
                        <Typography variant='h4' className={classes.title}>
                            {activeProject.name}
                        </Typography>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <DetailPanel
                                    title='Technologies Used'
                                    component={<TechnologyList />}
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

export default withStyles(styles)(ProjectDetailsDialog);
