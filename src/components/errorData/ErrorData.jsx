import React from "react";

export const ErrorData = ({ country, onBackToHomePage }) => {

    return (
        <div>
            <button onClick={onBackToHomePage}>back</button>
            <h1>Not Found Country</h1>
            <p>{country.status}  {country.message}</p>
        </div>
    )
}