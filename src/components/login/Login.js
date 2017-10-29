import React, { PureComponent } from 'react';
import { bool, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

import { IconButtonClear, IconButtonPerson } from '~/components/styled/buttons';
import { LoginModal } from '~/components/styled';
import { SmallText } from '~/components/styled/typography';

import * as dispatchers from '~/dispatchers';

class Login extends PureComponent {
    constructor() {
        super();

        this.logout = this.logout.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);

        this.state = {
            showLogin: false,
        };
    }

    componentDidMount() {
        const ui = new firebaseui.auth.AuthUI(firebase.auth());

        const uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                // firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            // Terms of service url.
            tosUrl: '/',
        };

        ui.start('#firebaseui-auth-container', uiConfig);

        /* eslint-disable no-console */
        firebase.auth().onAuthStateChanged(
            (user) => {
                if (user) {
                    const { displayName: name } = user;
                    this.props.loggedIn({ name });
                } else {
                    this.props.loggedOut();
                }
            },
            error => console.log(error),
        );
        /* eslint-enable no-console */
    }

    logout() {
        firebase.auth().signOut();
    }

    toggleLogin() {
        this.setState({
            showLogin: !this.state.showLogin,
        });
    }

    render() {
        const {
            user: {
                authenticated,
                name,
            },
        } = this.props;

        const {
            showLogin,
        } = this.state;

        return (
            <div>
                <IconButtonPerson
                    onClick={this.toggleLogin}
                    type="button"
                >
                    Logg inn
                </IconButtonPerson>
                {authenticated &&
                    <SmallText middle={true}>
                        <span>
                            {name}
                        </span>
                        <IconButtonClear
                            onClick={this.logout}
                            type="button"
                        >
                            Logg ut
                        </IconButtonClear>
                    </SmallText>
                }
                <LoginModal open={showLogin}>
                    <IconButtonClear
                        onClick={this.toggleLogin}
                        type="button"
                    >
                        Lukk innloggingsvindu
                    </IconButtonClear>
                    <div id="firebaseui-auth-container" />
                </LoginModal>
            </div>
        );
    }
}

Login.propTypes = {
    loggedIn: func.isRequired,
    loggedOut: func.isRequired,
    user: shape({
        name: string,
        authenticated: bool.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(
    mapStateToProps,
    {
        loggedIn: dispatchers.loggedIn,
        loggedOut: dispatchers.loggedOut,
    },
)(Login);
