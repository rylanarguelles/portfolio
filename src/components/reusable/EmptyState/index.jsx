import React from 'react';
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

class EmptyState extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Typography variant='h6' className={classes.text}>
                Strange, nothing seems to be here. Come back another time,
                maybe.
            </Typography>
        );
    }
}

export default withStyles(styles)(EmptyState);
