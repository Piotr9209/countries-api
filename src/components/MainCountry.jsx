import React, { useState, useEffect } from "react";
import { ShowAllCountries } from './ShowAllCountries'
import { Loading } from "./Loading";
import { ErrorData } from "./ErrorData";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../redux/countriesSlice";
import { ShowOneCountry } from "./ShowOneCountry";
import { toggleIsSendInput } from "../redux/countriesSlice";


export const MainCountry = () => {
    const [searchCountry, setSearchCountry] = useState('');
    const dispatch = useDispatch();
    const { status, countries, isSend } = useSelector(state => state.countries);
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
        isSend && dispatch(getCountries(NAME_COUNTRIES_URL));
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

    const handleClickDiv = (argsMy) => {
        const COUNTRY_URL = `https://restcountries.com/v3.1/name/${argsMy}`
        dispatch(getCountries(COUNTRY_URL));
    };


    const lengthArrayCountries = countries.length === 1;
    return (
        <main>
            {Array.isArray(countries) ?
                lengthArrayCountries ?
                    <ShowOneCountry countries={countries} status={status} /> :
                    <ShowAllCountries handleSubmitSearchCountry={handleSubmitSearchCountry} handleChangeSearchCountry={handleChangeSearchCountry} handleDropdownFilterRegion={handleDropdownFilterRegion} handleClickDiv={handleClickDiv} countries={countries} isSend={isSend} />
                :
                <ErrorData countries={countries} />
            }
            {status === 'loading' && <Loading />}
        </main>
    )
}