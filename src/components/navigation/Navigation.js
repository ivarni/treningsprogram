import React from 'react';

import { BodyText, Link } from '~/components/styled/typography';
import { NavList } from '~/components/styled/lists';

export default function Navigation() {
    return (
        <nav>
            <BodyText>
                <NavList inline={true}>
                    <li>
                        <Link
                            to="/øvelser"
                            underline={true}
                        >
                            Øvelser
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/program"
                            underline={true}
                        >
                            Program
                        </Link>
                    </li>
                </NavList>
            </BodyText>
        </nav>
    );
}
