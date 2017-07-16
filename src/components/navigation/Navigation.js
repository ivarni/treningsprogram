import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Forsiden
                    </Link>
                </li>
                <li>
                    <Link to="/øvelser">
                        Øvelser
                    </Link>
                </li>
                <li>
                    <Link to="/program">
                        Program
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
