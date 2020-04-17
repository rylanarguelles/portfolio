import React from 'react';
import Grid from '@material-ui/core/Grid';
import ItemView from '../ItemView';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    root: {
        width: 360,
    },
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
});

class Education extends React.Component {
    render() {
        const { educationItems, classes } = this.props;
        const items = educationItems ? Array.from(educationItems) : [];
        return (
            <Grid
                container
                direction='column'
                spacing={1}
                className={classes.root}
            >
                <Grid item>
                    <Typography variant='h6' className={classes.text}>
                        Education
                    </Typography>
                </Grid>
                <Grid item container spacing={3}>
                    {items.length > 0 &&
                        items.map((i) => (
                            <Grid item key={i.id}>
                                <ItemView
                                    title={i.title}
                                    details={`${i.institution} ${i.graduationYear}`}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Education);
