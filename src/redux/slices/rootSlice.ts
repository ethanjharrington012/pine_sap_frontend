import { createSlice } from '@reduxjs/toolkit';

export interface ArtistState {
    your_name: string,
    artist_name: string,
    description: string,
    artist_rating: number,
    fav_song: string
}

const initialState: ArtistState = {
    your_name: 'artist',
    artist_name: '',
    description: '',
    artist_rating: 0,
    fav_song: ''
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseName: (state, action) => { state.your_name = action.payload },
        chooseArtist: (state, action) => { state.artist_name = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        chooseRating: (state, action) => { state.artist_rating = action.payload },
        chooseSong: (state, action) => { state.fav_song = action.payload }
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const {
    chooseName,
    chooseArtist,
    chooseDescription,
    chooseRating,
    chooseSong
} = rootSlice.actions;