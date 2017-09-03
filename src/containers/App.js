import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { About } from '~/components/about';
import { Exercises } from '~/components/exercises';
import { Header } from '~/components/header';
import { Login } from '~/components/login';
import { Navigation } from '~/components/navigation';
import { Program } from '~/components/program';

import '~/styles/index.less';
import 'firebaseui/dist/firebaseui.css';

const App = () => (
    <BrowserRouter>
        <div className="body-text">
            <header className="header">
                <Login />
                <Header />
                <Navigation />
            </header>
            <main className="main-container">
                <Route path="/øvelser" component={Exercises} />
                <Route path="/program" component={Program} />
                <Route exact={true} path="/" component={About} />
            </main>
        </div>
    </BrowserRouter>
);

export default App;
