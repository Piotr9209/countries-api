import React from 'react';
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";

import './showOneCountry.scss';

export const ShowOneCountry = ({ country, statusCountry, onBack }) => {
    const { isDarkMode } = useSelector(state => state.countries);

    return (
        <div className={isDarkMode ? 'oneCountryDark' : 'oneCountryLight'}>
            <div className='buttonBack'>
                <button onClick={onBack}><BiArrowBack className='biArrowBack' /> Back</button>
            </div>
            <div className='oneCountry'>
                {statusCountry === 'success' && country.map(country => (
                    <div className='containerOneCountry' key={country.name.common}>
                        <div className='containerToImg'>
                            <img src={country.flags.svg} alt={country.name.common} />
                        </div>
                        <div className='oneCountryInfo'>
                            <div className='oneCountryName'>
                                <h1>{country.name.common}</h1>
                            </div>
                            <div className='oneCountryInfoNativeName'>
                                <div className='flexContainerInfoNativeName'>
                                    <p><span>Official Name: </span>{Object.values(country.name.nativeName)[0]?.official} </p>
                                    <p><span>Population: </span>{country.population}</p>
                                    <p><span>Region: </span>{country.region}</p>
                                    <p><span>Sub Region: </span>{country.subregion}</p>
                                    {country.capital?.map(capitalName => <p key={capitalName}>
                                        <span>Capital: </span>{capitalName}</p>)}
                                </div>
                                <div className='flexContainerInfoNativeName'>
                                    {country.tld?.map(lvlDomain => <p key={lvlDomain} className='lvlDomain'><span>Top Level Domain: </span>{lvlDomain}</p>)}
                                    <p><span>Currencies: </span>{Object.values(country.currencies)[0]?.name}</p>
                                    <p><span>Languages: </span>
                                        {Object.values(country?.languages)[0] && <span className='languages'>{Object.values(country?.languages)[0]}</span>}
                                        {Object.values(country?.languages)[1] && <span className='languages'>, {Object.values(country?.languages)[1]}</span>}
                                        {Object.values(country?.languages)[2] && <span className='languages'>, {Object.values(country?.languages)[2]}</span>}
                                    </p>
                                </div>
                            </div>
                            <div className='oneCountryInfoBorderCountries'>
                                <span>Border Countries: </span><ul>{country?.borders?.map(countryTag => <li key={countryTag}>{countryTag} </li>)}</ul>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}