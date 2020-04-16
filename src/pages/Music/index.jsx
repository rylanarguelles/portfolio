import React from 'react';
import Grid from '@material-ui/core/Grid';
import SongCard from './components/SongCard';

export default class Music extends React.Component {
    render() {
        return (
            <Grid container direction='row' spacing={4}>
                <Grid item>
                    <SongCard />
                </Grid>
                <Grid item>
                    <SongCard />
                </Grid>
                <Grid item>
                    <SongCard />
                </Grid>
                <Grid item>
                    <SongCard />
                </Grid>
                <Grid item>
                    <SongCard />
                </Grid>
                <Grid item>
                    <SongCard />
                </Grid>
            </Grid>
        );
    }
}
