import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__bar">
                <li>
                    <Link className="navigation__link" to="/øvelser">
                        Øvelser
                    </Link>
                </li>
                <li>
                    <Link className="navigation__link" to="/program">
                        Program
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
