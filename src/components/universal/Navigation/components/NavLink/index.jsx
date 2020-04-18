import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    navItem: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
    link: {
        textDecoration: 'none',
    },
});

class NavLink extends React.Component {
    render() {
        const { title, route, classes } = this.props;
        return (
            <Link to={route} className={classes.link}>
                <Button>
                    <Typography variant='body2' className={classes.navItem}>
                        {title}
                    </Typography>
                </Button>
            </Link>
        );
    }
}

export default withStyles(styles)(NavLink);
