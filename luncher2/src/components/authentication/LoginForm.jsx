import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginForm = () => {
    const [state, setState] = useState({
        form: {},
        error: false,
        loading: false
    });
    useEffect(() => {
        if (state.error) {
            setState({ ...state, loading: false });
        }
    }, []);

    const handleChange = e => {
        e.preventDefault();
        setState({
            ...state,
            form: { ...state.form, [e.target.name]: e.target.value },
            error: false,
            loading: false
        });
    };
    const login = e => {
        e.preventDefault();
        setState({ ...state, loading: true });
        axios({
            method: 'post',
            url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/login`,
            data: {
                password: state.form.password,
                userName: state.form.userName
            }
        })
            .then(res => {
                localStorage.setItem('userToken', res.data.token);
                localStorage.setItem('userID', res.data.user.id);
            })
            .catch(err => setState({ ...state, error: true }));
    };
    return (
        <Styles>
            <form onSubmit={login} className="loginForm">
                <p className={state.error ? 'error' : 'hide'}>
                    {state.error ? 'Incorrect login' : null}
                </p>
                <p className={state.loading ? 'error' : 'hide'}>
                    {state.loading ? 'Loading . . .' : null}
                </p>

                <input
                    type="text"
                    name="userName"
                    value={state.form.userName}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    autoComplete="on"
                    name="password"
                    value={state.form.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button className="btn btn-max">Login</button>
            </form>
        </Styles>
    );
};

const Styles = styled.div``;

export default LoginForm;
