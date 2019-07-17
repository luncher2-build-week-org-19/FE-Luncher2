import React,{useState} from 'react';
import axios from 'axios';

const RegistrationForm = ()=>{
  const [state, setState]=useState({form:{},error:false})

  const handleChange=(e)=>{
    e.preventDefault()
    setState({...state,form:{[e.target.name]:e.target.value},error:false})
  }
  const register=()=>{
    axios({
      method: 'post',
      url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/register`,
      data: {
        email: state.form.email,
        firstName: state.form.firstName,
        lastName: state.form.lastName,
        password: state.form.password,
        userRole: state.form.userRole,
        userName: state.form.userName,
      },
    })
      .then(res => {
        localStorage.setItem('id', res.data[0]);
      })
      .catch(err => setState({...state, error:true}));
  }
        return (
            <form onSubmit={e => register(e)}>
                <p className={state.error ? 'error' : 'hide'}>
                    {state.error
                        ? 'Username and/or email already in use'
                        : null}
                </p>

                <input
                    name="firstName"
                    autoComplete="on"
                    placeholder="First Name"
                    value={state.form.firstName}
                    onChange={e=>handleChange(e)}
                />
                <input
                    name="lastName"
                    autoComplete="on"
                    placeholder="Last Name"
                    value={state.form.lastName}
                    onChange={e=>handleChange(e)}
                />
                <div className="radio">
                    <input
                        type="radio"
                        id="User"
                        name="userRole"
                        value="user"
                        required
                        checked="checked"
                        onChange={e=>handleChange(e)}
                    />
                    <Label htmlFor="user">User</Label>
                </div>
                <div className="radio">
                    <input
                        type="radio"
                        id="admin"
                        name="userRole"
                        value="admin"
                        required
                        onChange={e=>handleChange(e)}
                    />
                    <Label htmlFor="admin">Admin</Label>
                </div>
                <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    required
                    value={state.form.userName}
                    onChange={e=>handleChange(e)}
                />
                <input
                    type="email"
                    autoComplete="on"
                    name="email"
                    placeholder="Email"
                    required
                    value={state.form.email}
                    onChange={e=>handleChange(e)}
                />
                <input
                    type="password"
                    autoComplete="on"
                    name="password"
                    placeholder="Password"
                    required
                    value={state.form.password}
                    onChange={e=>handleChange(e)}
                />
                <Button onClick={e => this.handleRegister(e)}>Register</Button>
                <p>
                    Already have an account? <span className="link">Login</span>
                </p>
            </form>
        );
    }
}

export default RegistrationForm;
