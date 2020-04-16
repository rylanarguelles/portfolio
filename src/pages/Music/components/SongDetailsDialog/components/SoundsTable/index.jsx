import React from 'react';
import SoundRow from './components/SoundRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    soundsTable: {
        backgroundColor: grey[300],
    },
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
});

class SoundsTable extends React.Component {
    render() {
        const { sounds, classes } = this.props;
        return (
            <Table className={classes.soundsTable}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography className={classes.text}>
                                Instrument
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={classes.text}>
                                Effects
                            </Typography>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <SoundRow />
                    <SoundRow />
                    <SoundRow />
                    <SoundRow />
                </TableBody>
            </Table>
        );
    }
}

export default withStyles(styles)(SoundsTable);
