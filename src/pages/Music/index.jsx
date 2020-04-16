import React from 'react';
import { inject, observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import SongCard from './components/SongCard';
import SongDetailsDialog from './components/SongDetailsDialog';

class Music extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detailsIsOpen: false,
        };

        this.toggleSongDetailsDialog = this.toggleSongDetailsDialog.bind(this);
    }

    toggleSongDetailsDialog() {
        this.setState({
            detailsIsOpen: !this.state.detailsIsOpen,
        });
    }

    render() {
        const { MusicStore } = this.props;
        const { activeSong } = MusicStore;
        return (
            <Grid container direction='row' spacing={4} justify='flex-start'>
                <Grid item>
                    <SongCard openDialog={this.toggleSongDetailsDialog} />
                </Grid>
                <Grid item>
                    <SongCard openDialog={this.toggleSongDetailsDialog} />
                </Grid>
                <Grid item>
                    <SongCard openDialog={this.toggleSongDetailsDialog} />
                </Grid>
                <Grid item>
                    <SongCard openDialog={this.toggleSongDetailsDialog} />
                </Grid>
                <Grid item>
                    <SongCard openDialog={this.toggleSongDetailsDialog} />
                </Grid>
                <Grid item>
                    <SongCard openDialog={this.toggleSongDetailsDialog} />
                </Grid>
                <SongDetailsDialog
                    activeSong={activeSong}
                    isOpen={this.state.detailsIsOpen}
                    close={this.toggleSongDetailsDialog}
                />
            </Grid>
        );
    }
}

export default inject('MusicStore')(observer(Music));
