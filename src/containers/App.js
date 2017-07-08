import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { About } from '~/components/about';
import { Exercises } from '~/components/exercises';
import { Header } from '~/components/header';
import { Navigation } from '~/components/navigation';

const App = () => (
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Navigation />
                <Route path="/øvelser" component={Exercises} />
                <Route exact={true} path="/" component={About} />
            </div>
        </BrowserRouter>
    </div>
);

export default App;
