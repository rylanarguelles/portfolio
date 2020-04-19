import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AdminAddDialog extends React.Component {
    render() {
        const { isOpen, close, handleAdd, title, fields } = this.props;
        return (
            <Dialog fullWidth maxWidth='sm' open={isOpen} onClose={close}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>{fields}</DialogContent>
                <br />
                <br />
                <br />
                <DialogActions>
                    <Button onClick={close}>Cancel</Button>
                    <Button color='primary' onClick={handleAdd}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
