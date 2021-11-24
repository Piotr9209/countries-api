import React from "react";
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import './errorData.scss';

export const ErrorData = ({ country, onBackToHomePage }) => {
    const { isDarkMode } = useSelector(state => state.countries);

    return (
        <div className={isDarkMode ? 'errorDark' : 'errorLight'}>
            <div className='buttonBack'>
                <button onClick={onBackToHomePage}>
                    <BiArrowBack className='biArrowBack' /> Back</button>
            </div>
            <div className='errorMessage'>
                <h1>Not Found Country</h1>
                <p>{country.status} {country.message}</p>
            </div>
        </div>
    )
}