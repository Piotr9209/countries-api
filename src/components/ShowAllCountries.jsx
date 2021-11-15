import React from "react";
import { useSelector } from "react-redux";



export const ShowAllCountries = ({ handleSubmitSearchCountry, handleChangeSearchCountry, isSend, handleDropdownFilterRegion, handleClickDiv }) => {
    const { status, countries } = useSelector(state => state.countries);

    return (
        <div>
            <div>
                <form onSubmit={handleSubmitSearchCountry}>
                    <input type="search" onChange={handleChangeSearchCountry} />
                </form>
                {!isSend && <p>too small characters</p>}
            </div>
            <div>
                <select onChange={handleDropdownFilterRegion}>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <div>
            </div>
            <div>
                {status === 'success' && countries.map((country) => {
                    return (
                        <div key={country.name.common} onClick={() => handleClickDiv(country.name.common)}>
                            <div><img src={country.flags.png} alt={country.name.common} /></div>
                            <div>
                                <p>{country.name.common}</p>
                                <p>{country.population}</p>
                                <p>{country.region}</p>
                                {country.capital?.map(capitalName => <p key={capitalName}>{capitalName}</p>)}
                            </div>
                        </div>
                    )
                })}
            </div></div>
    )
}