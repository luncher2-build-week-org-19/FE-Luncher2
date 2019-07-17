import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser, registerUser } from '../../actions/login_action';
// import { Form, Input, Button, Label } from 'reactstrap';
// import Loader from 'react-loader-spinner';
import styled from 'styled-components';

// import '../../styles/login.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const Login = () => {
    const [state, setState] = useState(true);

    return (
        <Styles>
            <div className="wrapper">
                <div className="formWrapper">
                    <img
                        className="logo"
                        src="https://raw.githubusercontent.com/luncher2-build-week-org-19/UI-tabita-filimon/tabita-filimon/IMG/OrangeSlice%20(1).png"
                        alt="Luncher"
                    />

                    {state ? (
                        <>
                            <LoginForm />
                            <p>
                                Need an account?
                                <span
                                    className="link"
                                    onClick={() => {
                                        setState(false);
                                    }}>
                                    Register
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <RegistrationForm />
                            <p>
                                Already have an account?{' '}
                                <span
                                    className="link"
                                    onClick={() => {
                                        setState(true);
                                    }}>
                                    Login
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Styles>
    );
};
const Styles = styled.div``;
const mapStateToProps = state => {
    return {
        loginIsLoading: state.loginIsLoading,
        loginError: state.loginError,
        registerError: state.registerError
    };
};

export default connect(
    mapStateToProps,
    { loginUser, registerUser }
)(Login);
