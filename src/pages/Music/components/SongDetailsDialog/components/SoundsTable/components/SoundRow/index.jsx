import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
});

class SoundRow extends React.Component {
    render() {
        const { sound, classes } = this.props;
        return (
            <TableRow>
                <TableCell>
                    <Typography className={classes.text}>
                        {sound.instrument}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography className={classes.text}>
                        {sound.effects}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='overline' className={classes.text}>
                        {sound.live ? 'Live' : 'Simulated'}
                    </Typography>
                </TableCell>
            </TableRow>
        );
    }
}

export default withStyles(styles)(SoundRow);
