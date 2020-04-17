import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import React from 'react';
import ItemView from '../ItemView';

const styles = (theme) => ({
    root: {
        width: 420,
    },
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
});

class WorkExperience extends React.Component {
    render() {
        const { experienceItems, classes } = this.props;
        const items = experienceItems ? Array.from(experienceItems) : [];
        return (
            <Grid
                container
                direction='column'
                spacing={1}
                className={classes.root}
            >
                <Grid item>
                    <Typography variant='h6' className={classes.text}>
                        Experience
                    </Typography>
                </Grid>
                <Grid item container spacing={3}>
                    {items.length > 0 &&
                        items.map((i) => (
                            <Grid item key={i.id}>
                                <ItemView
                                    title={i.position}
                                    details={`${i.company} ${i.year}`}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(WorkExperience);
