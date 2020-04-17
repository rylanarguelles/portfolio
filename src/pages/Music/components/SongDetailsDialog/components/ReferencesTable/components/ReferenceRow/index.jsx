import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
    link: {
        color: red[800],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
});

class ReferenceRow extends React.Component {
    render() {
        const { reference, classes } = this.props;
        return (
            <TableRow>
                <TableCell>
                    <Typography>
                        <a className={classes.link} href={reference.link}>
                            {reference.name}
                        </a>
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography className={classes.text}>
                        {reference.creator}
                    </Typography>
                </TableCell>
            </TableRow>
        );
    }
}

export default withStyles(styles)(ReferenceRow);
