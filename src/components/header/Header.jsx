import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/countriesSlice";
import { BsMoon } from 'react-icons/bs'

import './header.scss';

export const Header = () => {
    const dispatch = useDispatch();
    const { isDarkMode } = useSelector(state => state.countries);

    return (
        <>
            <header className={isDarkMode ? 'headerDark' : 'headerLight'}>
                <div><h1>Where in the World?</h1></div>
                <div><button onClick={() => dispatch(toggleDarkMode())}><BsMoon className='bsMoon' /> {isDarkMode ? 'Light Mode' : 'Dark Mode'}</button></div>
            </header>
        </>
    )
}