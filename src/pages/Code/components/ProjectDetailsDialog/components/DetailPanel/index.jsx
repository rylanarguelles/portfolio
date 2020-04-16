import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    panel: {
        backgroundColor: grey[300],
    },
    text: {
        color: grey[900],
        fontFamily: 'Butler',
        fontWeight: 'bold',
    },
    icon: {
        color: grey[900],
    },
});

class DetailPanel extends React.Component {
    render() {
        const { title, component, classes } = this.props;
        return (
            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.icon} />}
                >
                    <Typography variant='overline' className={classes.text}>
                        {title}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>{component}</ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withStyles(styles)(DetailPanel);
