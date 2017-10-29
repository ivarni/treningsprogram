import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { About } from '~/components/about';
import { Exercises } from '~/components/exercises';
import { Login } from '~/components/login';
import { Navigation } from '~/components/navigation';
import { Program } from '~/components/program';

import { Header, Main } from '~/components/styled';
import { BodyText, Link, Title } from '~/components/styled/typography';

import '~/styles/index.less';
import 'firebaseui/dist/firebaseui.css';

const theme = {
    colour: '#34515E',
    headerBackground: '#D5C67A',
    linkColour: '#292929',
};

const App = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <div>
                <Header>
                    <Login />
                    <Link to="/">
                        <Title>
                            Mitt treningsprogram
                        </Title>
                    </Link>
                    <Navigation />
                </Header>
                <BodyText>
                    <Main>
                        <Route path="/øvelser" component={Exercises} />
                        <Route path="/program" component={Program} />
                        <Route exact={true} path="/" component={About} />
                    </Main>
                </BodyText>
            </div>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
