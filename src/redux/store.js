import { configureStore } from "@reduxjs/toolkit";
import { countriesSlice, countrySlice } from './countriesSlice';

export const store = configureStore({
    reducer: {
        countries: countriesSlice.reducer,
        country: countrySlice.reducer
    }
});

