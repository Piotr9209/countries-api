import React from "react";

export const ErrorData = ({ countries }) => {

    return (
        <div><h1>Not Found Country</h1>
            <p>{countries.status} {countries.message}</p>
        </div>
    )
}