import React from 'react';
import { inject, observer } from 'mobx-react';
import AdminAddDialog from '../../components/reusable/AdminAddDialog';
import AddHomeItemFields from './components/AddHomeItemFields';
import AdminSpeedDial from '../../components/reusable/AdminSpeedDial';
import Grid from '@material-ui/core/Grid';
import Education from './components/Education';
import Links from './components/Links';
import WorkExperience from './components/WorkExperience';
import HomeController from '../../controllers/home';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            adminDialogIsOpen: false,
        };

        this.toggleAdminDialog = this.toggleAdminDialog.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        // TODO: Service for retrieving education and experience items
    }

    toggleAdminDialog() {
        this.setState({
            adminDialogIsOpen: !this.state.adminDialogIsOpen,
        });
        if (!this.state.adminDialogIsOpen) {
            HomeController.resetAddForm();
        }
    }

    handleAdd() {
        // TODO: Add function
    }

    render() {
        const { HomeStore } = this.props;
        const { educationItems, experienceItems } = HomeStore;
        return (
            <Grid container direction='row' spacing={4} justify='space-between'>
                {educationItems && (
                    <Grid item>
                        <Education educationItems={educationItems} />
                    </Grid>
                )}
                {experienceItems && (
                    <Grid item>
                        <WorkExperience experienceItems={experienceItems} />
                    </Grid>
                )}
                <Grid item>
                    <Links />
                </Grid>
                <AdminSpeedDial
                    addTitle='Add Education / Experience'
                    handleAdd={this.toggleAdminDialog}
                />
                <AdminAddDialog
                    isOpen={this.state.adminDialogIsOpen}
                    close={this.toggleAdminDialog}
                    handleAdd={this.handleAdd}
                    title='Add Experience / Education'
                    fields={<AddHomeItemFields />}
                />
            </Grid>
        );
    }
}

export default inject('HomeStore')(observer(Home));
