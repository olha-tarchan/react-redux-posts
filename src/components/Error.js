import React from "react";

export const Error = ({text}) => {
    return (
        <div className="alert alert-warning" role="alert">
            error: {text}
        </div>
    )
}