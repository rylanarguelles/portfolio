import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import { inject, observer } from 'mobx-react';
import React from 'react';

class AddHomeItemFields extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange = (property) => (e) => {
        const { HomeStore } = this.props;
        const {
            addHomeItemForm: { form },
        } = HomeStore;
        form[property] = e.target.value;
    };

    render() {
        const { HomeStore } = this.props;
        const {
            addHomeItemForm: {
                form: { type, title, company, year },
            },
        } = HomeStore;
        const emptyTitle = title === '';
        const emptyCompany = company === '';
        const emptyYear = year === '';
        return (
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <RadioGroup value={type} onChange={this.onChange('type')}>
                        <FormControlLabel
                            value='Experience'
                            control={<Radio />}
                            label='Experience'
                        />
                        <FormControlLabel
                            value='Education'
                            control={<Radio />}
                            label='Education'
                        />
                    </RadioGroup>
                </Grid>
                <Grid item>
                    <TextField
                        required
                        value={title}
                        fullWidth
                        label='Title'
                        onChange={this.onChange('title')}
                        error={emptyTitle}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        value={company}
                        fullWidth
                        label='Company'
                        onChange={this.onChange('company')}
                        error={emptyCompany}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        value={year}
                        fullWidth
                        label='Year'
                        onChange={this.onChange('year')}
                        error={emptyYear}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default inject('HomeStore')(observer(AddHomeItemFields));
