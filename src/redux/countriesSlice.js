import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCountries = createAsyncThunk(
    "countries/getCountries",
    async (url) => {
        // const { dispatch } = thunkAPI;
        return await fetch(url).then(res => res.json());
    }
);

const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countries: [],
        status: null,
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
            state.status = 'loading';
        },
        [getCountries.fulfilled]: (state, action) => {
            state.status = 'success';
            state.countries = action.payload;
        },
        [getCountries.rejected]: (state) => {
            state.status = 'failed';
        }
    }
});


export const { toggleDarkMode, toggleIsSendInput } = countriesSlice.actions;
export default countriesSlice;

