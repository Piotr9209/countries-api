import React, { useState, useEffect } from "react";
import { ShowAllCountries } from '../showAllCountries/ShowAllCountries'
import { Loading } from "../loading/Loading";
import { ErrorData } from "../errorData/ErrorData";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, getCountry } from "../../redux/countriesSlice";
import { ShowOneCountry } from "../showOneCountry/ShowOneCountry";
import { toggleIsSendInput } from "../../redux/countriesSlice";
import { clearArrayCountry } from "../../redux/countriesSlice";
import './mainCountry.scss';

export const MainCountry = () => {
    const [searchCountry, setSearchCountry] = useState('');
    const dispatch = useDispatch();
    const { statusCountries, countries, isSend, isDarkMode } = useSelector(state => state.countries);
    const { statusCountry, country } = useSelector(state => state.country)
    const BASE_URL = 'https://restcountries.com/v3.1/all';

    useEffect(() => {
        dispatch(getCountries(BASE_URL));
    }, [dispatch]);

    const handleChangeSearchCountry = (e) => {
        e.preventDefault();
        setSearchCountry(prevState => (e.target.value).trim());
        if (typeof searchCountry !== 'string') {
            dispatch(toggleIsSendInput(false));
            return false;
        } else if (searchCountry.length < 2) {
            dispatch(toggleIsSendInput(false));
            return false;
        } else {
            dispatch(toggleIsSendInput(true));
        }
    };

    const handleSubmitSearchCountry = (e) => {
        e.preventDefault();
        const NAME_COUNTRIES_URL = `https://restcountries.com/v3.1/name/${searchCountry}?fullText=true`;
        isSend && dispatch(getCountry(NAME_COUNTRIES_URL));
    };

    const handleDropdownFilterRegion = (e) => {
        e.preventDefault();
        if (e.target.value === 'all') {
            dispatch(getCountries(BASE_URL));
        } else {
            const REGION_URL = `https://restcountries.com/v3.1/region/${e.target.value}`;
            dispatch(getCountries(REGION_URL));
        }
    };

    const handleClickPickCountry = (argsMy) => {
        const COUNTRY_URL = `https://restcountries.com/v3.1/name/${argsMy}`
        dispatch(getCountry(COUNTRY_URL));
    };

    const handleClickToRemoveArrayCountry = () => {
        dispatch(clearArrayCountry())
        dispatch(getCountries(BASE_URL));
    };

    const lengthArrayCountry = country.length === 1;


    return (
        <main className={isDarkMode ? 'mainDark' : 'mainLight'}>
            {Array.isArray(country) ?
                lengthArrayCountry ?
                    <ShowOneCountry country={country} statusCountry={statusCountry} onBack={handleClickToRemoveArrayCountry} />
                    :
                    <ShowAllCountries handleSubmitSearchCountry={handleSubmitSearchCountry} handleChangeSearchCountry={handleChangeSearchCountry} handleDropdownFilterRegion={handleDropdownFilterRegion} handleClickDiv={handleClickPickCountry} countries={countries} isSend={isSend} country={country} />
                :
                <ErrorData country={country} onBackToHomePage={handleClickToRemoveArrayCountry} />
            }
            {statusCountries === 'loading' && <Loading />}
        </main>
    )
}

