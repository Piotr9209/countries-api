import React, { useState } from 'react';

import { MainCountry } from './MainCountry';


export const ShowOneCountry = ({ countries, status }) => {
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(true);
    //do poprawy, pytanie w notatniku
    const handleClickPrevToAllCountries = () => {
        setToggle(prevState => true);
        setToggle2(prevState => false);
    };


    return (
        <div>
            {toggle2 && <div>
                <button onClick={handleClickPrevToAllCountries}>back</button>
            </div>}
            <div>
                {status === 'success' && countries.map(country => (
                    <div key={country.name.common}>
                        <div><img src={country.flags.svg} alt={country.name.common} /></div>
                        <div>
                            <div>
                                <h1>{country.name.common}</h1>
                            </div>
                            <div>
                                <p><span>Native Name: </span>{console.log(country.name.nativeName['prs'], '<---native')}</p>
                                {/* jak się odwołać do tego obiektu? */}
                                <p><span>Population: </span>{country.population}</p>
                                <p><span>Region: </span>{country.region}</p>
                                <p><span>Sub Region: </span>{country.subregion}</p>
                                {country.capital?.map(capitalName => <p key={capitalName}><span>Capital: </span>{capitalName}</p>)}
                            </div>
                            <div>
                                {country.tld?.map(lvlDomain => <p key={lvlDomain}><span>Top Level Domain:</span>{lvlDomain}</p>)}
                                {/* <p>  {country.currencies}</p> */}
                                {/* jak się dostać do currencies? analogiczna sytuacja co z nativeName*/}
                                {/* <p>  {country.languages}</p> */}
                                {/* jak się dostać do currencies? analogiczna sytuacja co z nativeName*/}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {toggle && <MainCountry />}
        </div>

    )
}