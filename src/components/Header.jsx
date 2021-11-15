import React from "react";
import { useSelector, useDispatch } from "react-redux";


export const Header = () => {
    const dispatch = useDispatch();
    const { status, countries } = useSelector(state => state.countries);
    const BASE_URL = 'https://restcountries.com/v3.1/all';

    return (
        <>
            <header>
                <div><h1>Where in the World?</h1></div>
                <div><span>Dark Mode</span></div>
            </header>
        </>
    )
}