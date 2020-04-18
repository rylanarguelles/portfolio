import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// TODO: Inject auth store and add sign in controller functions, conditional rendering
export default class AdminSignInButton extends React.Component {
    render() {
        return (
            <Button>
                <Typography variant='overline'>Sign In</Typography>
            </Button>
        );
    }
}
