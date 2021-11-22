import React from "react";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import "./showAllCountries.scss";



export const ShowAllCountries = ({ handleSubmitSearchCountry, handleChangeSearchCountry, isSend, handleDropdownFilterRegion, handleClickDiv }) => {
    const { statusCountries, countries, isDarkMode } = useSelector(state => state.countries);

    return (
        <div className={isDarkMode ? 'allCountriesDark' : 'allCountriesLight'}>
            <div className='formCountries'>
                <form onSubmit={handleSubmitSearchCountry}>
                    <i><BsSearch /></i> <input type="search" placeholder="Search for a country..." onChange={handleChangeSearchCountry} />
                </form>
                {!isSend && <p className='wrongCountryInput'>too small characters</p>}
            </div>
            <div className='selectRegionCountry'>
                <select onChange={handleDropdownFilterRegion}>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <div className='listOfCountries'>
                {statusCountries === 'success' && countries.map((country) => {
                    return (
                        <div className='countryInListOfCountries'
                            key={country.name.common}
                            onClick={() => handleClickDiv(country.name.common)}>
                            <div>
                                <img src={country.flags.png} alt={country.name.common} />
                            </div>
                            <div className='containerCountryName'>
                                <p className='countryName'>{country.name.common}</p>
                                <p><span>Population: </span> {country.population}</p>
                                <p><span>Region: </span> {country.region}</p>
                                {country.capital?.map(capitalName => <p key={capitalName}><span>Capital: </span> {capitalName}</p>)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}