import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
//components
// import Login from './components/authentication/Login';
import Home from './components/home/Home';
import SchoolData from './components/school/SchoolData';
import authenticateHOC from './components/authentication/Authenticate';
import Navigation from './components/navBar/Navigation';
import { getUserInfo } from './actions';

// Styles
import { GlobalStyles } from './styles';

import Profile from './components/profile/Profile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginKey: '',
            id: '',
            userName: ''
        };
    }
    render() {
        return (
            <SiteWrapper>
                <GlobalStyles />
                <Navigation user={this.props.username} />

                <Route exact path="/" component={Home} />
                <Route path="/profile/" component={Profile} />
                <Route
                    path="/school/:id"
                    render={props => <SchoolData {...props} />}
                />
            </SiteWrapper>
        );
    }
}

const SiteWrapper = styled.div`
    text-align: center;
    box-sizing: border-box;
`;

const mapStateToProps = state => {
    return {
        id: state.id,
        isLoading: state.isLoading,
        user: {
            id: state.id,
            firstName: state.firstName,
            lastName: state.lastName,
            username: state.username,
            userRole: state.userRole,
            email: state.email
        }
    };
};

export default connect(
    mapStateToProps,
    { getUserInfo }
)(authenticateHOC(App));
