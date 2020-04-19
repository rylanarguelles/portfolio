import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    dial: {
        position: 'absolute',
        bottom: '64px',
        right: '64px',
    },
});

class AdminSpeedDial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialIsOpen: false,
        };

        this.toggleDial = this.toggleDial.bind(this);
    }

    toggleDial() {
        this.setState({
            dialIsOpen: !this.state.dialIsOpen,
        });
    }

    render() {
        const {
            hidden,
            addTitle,
            handleAdd,
            deleteTitle,
            handleDelete,
            classes,
        } = this.props;
        return (
            <SpeedDial
                ariaLabel='Admin Speed Dial'
                className={classes.dial}
                icon={<SpeedDialIcon />}
                hidden={hidden}
                direction='up'
                open={this.state.dialIsOpen}
                onOpen={this.toggleDial}
                onClose={this.toggleDial}
            >
                <SpeedDialAction
                    icon={<DeleteIcon />}
                    tooltipTitle={deleteTitle}
                    onClick={handleDelete}
                />
                <SpeedDialAction
                    icon={<AddIcon />}
                    tooltipTitle={addTitle}
                    onClick={handleAdd}
                />
            </SpeedDial>
        );
    }
}

export default withStyles(styles)(AdminSpeedDial);
