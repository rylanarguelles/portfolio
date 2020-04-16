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

class ReferenceRow extends React.Component {
    render() {
        const { reference, classes } = this.props;
        return (
            <TableRow>
                <TableCell>
                    <Typography>
                        <a
                            className={classes.text}
                            href='https://www.soundcloud.com'
                        >
                            Drum Track
                        </a>
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography className={classes.text}>
                        Beatles Vocals Dude
                    </Typography>
                </TableCell>
            </TableRow>
        );
    }
}

export default withStyles(styles)(ReferenceRow);
