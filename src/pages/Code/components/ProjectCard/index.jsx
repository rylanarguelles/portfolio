import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    card: {
        width: 302,
        backgroundColor: grey[200],
    },
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
    buttonText: {
        color: red[800],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
});

class ProjectCard extends React.Component {
    render() {
        const { project, openDialog, classes } = this.props;
        return (
            <Card variant='outlined' className={classes.card}>
                <CardContent>
                    <Typography variant='caption' className={classes.text}>
                        {project.role}
                    </Typography>
                    <Typography variant='h6' className={classes.text}>
                        {project.name}
                    </Typography>
                    <Typography variant='caption' className={classes.text}>
                        {project.year}
                    </Typography>
                    <br />
                    <br />
                    <Typography className={classes.text}>
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={openDialog}>
                        <Typography
                            variant='overline'
                            className={classes.buttonText}
                        >
                            Learn More
                        </Typography>
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(ProjectCard);
