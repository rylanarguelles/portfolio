import React from 'react';
import ReferenceRow from './components/ReferenceRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    referencesTable: {
        backgroundColor: grey[700],
    },
    text: {
        color: grey[50],
        fontFamily: 'Neue Haas Grotesk Text Pro',
    },
});

class ReferencesTable extends React.Component {
    render() {
        const { references, classes } = this.props;
        return (
            <Table className={classes.referencesTable}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography className={classes.text}>
                                Reference
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={classes.text}>
                                Creator
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <ReferenceRow />
                    <ReferenceRow />
                    <ReferenceRow />
                    <ReferenceRow />
                </TableBody>
            </Table>
        );
    }
}

export default withStyles(styles)(ReferencesTable);