import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [state, setState] = useState({
        form: { userRole: 'user' },
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
    const register = e => {
        e.preventDefault();
        setState({ ...state, loading: true });

        axios({
            method: 'post',
            url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/register`,
            data: {
                email: state.form.email,
                firstName: state.form.firstName,
                lastName: state.form.lastName,
                password: state.form.password,
                userRole: state.form.userRole || 'user',
                userName: state.form.userName
            }
        })
            .then(res => {
                localStorage.setItem('id', res.data[0]);
            })
            .catch(err => setState({ ...state, error: true }));
    };
    return (
        <form className="registerForm" onSubmit={register}>
            <p className={state.error ? 'error' : 'hide'}>
                {state.error ? 'Username and/or email already in use' : null}
            </p>

            <input
                name="firstName"
                autoComplete="on"
                placeholder="First Name"
                value={state.form.firstName}
                onChange={handleChange}
            />
            <input
                name="lastName"
                autoComplete="on"
                placeholder="Last Name"
                value={state.form.lastName}
                onChange={handleChange}
            />
            <fieldset>
                <div className="radio">
                    <input
                        type="radio"
                        id="User"
                        name="userRole"
                        value="user"
                        defaultChecked={true}
                        onChange={handleChange}
                    />
                    <label for="user">User</label>
                </div>
                <div className="radio">
                    <input
                        type="radio"
                        id="admin"
                        name="userRole"
                        value="admin"
                        onChange={handleChange}
                    />
                    <label for="admin">Admin</label>
                </div>
            </fieldset>
            <input
                type="text"
                name="userName"
                placeholder="Username"
                required
                value={state.form.userName}
                onChange={handleChange}
            />
            <input
                type="email"
                autoComplete="on"
                name="email"
                placeholder="Email"
                required
                value={state.form.email}
                onChange={handleChange}
            />
            <input
                type="password"
                autoComplete="on"
                name="password"
                placeholder="Password"
                required
                value={state.form.password}
                onChange={handleChange}
            />
            <button className="btn btn-max">Register</button>
        </form>
    );
};

export default RegistrationForm;
