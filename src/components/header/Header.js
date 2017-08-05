import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Link to="/" className="header__title">
            <h1 className="h1">
                Mitt treningsprogram
            </h1>
        </Link>
    );
}
