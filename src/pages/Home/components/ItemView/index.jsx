import React from 'react';
import Grid from '@material-ui/core/Grid';
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

class ItemView extends React.Component {
    render() {
        const { title, details, classes } = this.props;
        return (
            <Grid container direction='column'>
                <Grid item>
                    <Typography className={classes.text}>{title}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='overline' className={classes.text}>
                        {details}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ItemView);
