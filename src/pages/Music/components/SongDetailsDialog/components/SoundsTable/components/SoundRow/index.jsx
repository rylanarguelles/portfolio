import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    text: {
        color: grey[50],
        fontFamily: 'Neue Haas Grotesk Text Pro',
    },
});

class SoundRow extends React.Component {
    render() {
        const { sound, classes } = this.props;
        return (
            <TableRow>
                <TableCell>
                    <Typography className={classes.text}>
                        Squier Bullet Telecaster
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography className={classes.text}>
                        Vox Amplug 2 Blues
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='overline' className={classes.text}>
                        Live
                    </Typography>
                </TableCell>
            </TableRow>
        );
    }
}

export default withStyles(styles)(SoundRow);
