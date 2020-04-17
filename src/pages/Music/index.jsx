import React from 'react';
import { inject, observer } from 'mobx-react';
import EmptyState from '../../components/reusable/EmptyState';
import Grid from '@material-ui/core/Grid';
import SongCard from './components/SongCard';
import SongDetailsDialog from './components/SongDetailsDialog';
import MusicController from '../../controllers/music';

class Music extends React.Component {
    componentDidMount() {
        // TODO: Service for retrieving songs
    }

    constructor(props) {
        super(props);

        this.state = {
            detailsIsOpen: false,
        };

        this.toggleSongDetailsDialog = this.toggleSongDetailsDialog.bind(this);
    }

    toggleSongDetailsDialog(song) {
        this.setState({
            detailsIsOpen: !this.state.detailsIsOpen,
        });
        MusicController.setActiveSong(song);
    }

    render() {
        const { MusicStore } = this.props;
        const { songs, activeSong } = MusicStore;
        const items = songs ? Array.from(songs) : [];
        return (
            <React.Fragment>
                {items.length > 0 && (
                    <Grid
                        container
                        direction='row'
                        spacing={4}
                        justify='flex-start'
                    >
                        {items.map((i) => (
                            <Grid item key={i.id}>
                                <SongCard
                                    song={i}
                                    openDialog={() =>
                                        this.toggleSongDetailsDialog(i)
                                    }
                                />
                            </Grid>
                        ))}
                        <SongDetailsDialog
                            activeSong={activeSong}
                            isOpen={this.state.detailsIsOpen}
                            close={() =>
                                this.toggleSongDetailsDialog(undefined)
                            }
                        />
                    </Grid>
                )}
                {items.length === 0 && <EmptyState />}
            </React.Fragment>
        );
    }
}

export default inject('MusicStore')(observer(Music));
