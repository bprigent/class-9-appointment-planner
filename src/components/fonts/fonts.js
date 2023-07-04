import React from "react";
import "./fonts.css";

export function FontP ({copy}) {
    return (
        <p className="fontP">{copy}</p>
    );
}

export function FontH3 ({copy}) {
    return (
        <h3 className="fontH3">{copy}</h3>
    );
}

export function FontH2 ({copy}) {
    return (
        <h2 className="fontH2">{copy}</h2>
    );
}

export function FontH1 ({copy}) {
    return (
        <h1 className="fontH1">{copy}</h1>
    );
}