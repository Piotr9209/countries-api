import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCountries = createAsyncThunk(
    "countries/getCountries",
    async (url) => {
        // const { dispatch } = thunkAPI;
        return await fetch(url).then(res => res.json());
    }
);



export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countries: [],
        statusCountries: null,
        isDarkMode: false,
        isSend: true,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        toggleIsSendInput: (state, action) => {
            state.isSend = action.payload;
        }
    },
    extraReducers: {
        [getCountries.pending]: (state) => {
            state.statusCountries = 'loading';
        },
        [getCountries.fulfilled]: (state, action) => {
            state.statusCountries = 'success';
            state.countries = action.payload;
        },
        [getCountries.rejected]: (state) => {
            state.statusCountries = 'failed';
        },

    }
});

export const getCountry = createAsyncThunk(
    "country/getCountry",
    async (url) => {
        // const { dispatch } = thunkAPI;
        if (!url) {
            return;
        } else {
            return await fetch(url).then(res => res.json());
        }
    }
);

export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        country: [],
        statusCountry: null,
    },
    reducers: {
        clearArrayCountry: (state) => {
            state.country = [];
        }
    },
    extraReducers: {
        [getCountry.pending]: (state) => {
            state.statusCountry = 'loading'
        },
        [getCountry.fulfilled]: (state, action) => {
            state.statusCountry = 'success';
            state.country = action.payload;
        },
        [getCountry.rejected]: (state) => {
            state.statusCountry = 'failed';
        },
    }
})


export const { toggleDarkMode, toggleIsSendInput } = countriesSlice.actions;
export const { clearArrayCountry } = countrySlice.actions;

