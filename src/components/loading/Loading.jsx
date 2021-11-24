import React from "react";
import { useSelector } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './loading.scss';

export const Loading = () => {
    const { isDarkMode } = useSelector(state => state.countries);
    return (
        <div className={isDarkMode ? 'loadingDark' : 'loadingLight'}>
            <Loader className='loader'
                color={isDarkMode ? '#ffffff' : '#111517'}
                type="Oval"
                height={300}
                width={300}
                timeout={1500}
            />
        </div>
    )
}