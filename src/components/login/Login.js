import React, { PureComponent } from 'react';
import { bool, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

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
            <div className="login">
                <button
                    className="login__icon button button__icon button__icon--login"
                    onClick={this.toggleLogin}
                    type="button"
                >
                    Logg inn
                </button>
                {authenticated &&
                    <div>
                        <div className="login__user small-text">
                            <span className="login__username">
                                {name}
                            </span>
                            <button
                                className="login__logout button button__icon button__icon--clear"
                                onClick={this.logout}
                                type="button"
                            >
                                Logg ut
                            </button>
                        </div>
                    </div>
                }
                <div
                    className={classNames(
                        'login__modal',
                        { 'login__modal--open': showLogin },
                    )}
                >
                    <button
                        className="button button__icon button__icon--clear"
                        onClick={this.toggleLogin}
                        type="button"
                    >
                        Lukk innloggingsvindu
                    </button>
                    <div id="firebaseui-auth-container" />
                </div>
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
