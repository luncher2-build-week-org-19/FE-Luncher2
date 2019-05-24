import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions';
import { Form, Button, Input } from 'reactstrap';
import { getUserInfo } from '../../actions';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }

    componentDidMount = () => {
        let userToken = localStorage.getItem('userToken');
        this.props.getUserInfo(userToken);

        this.setState({
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
            isEditingUser: this.props.isEditingUser
        });
    };
    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    editUser = e => {
        e.preventDefault();
        let userToken = localStorage.getItem('userToken');
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };
        this.props.updateUser(userToken, user, this.props.id);
        this.setState({
            isEditingUser: false
        });
    };

    render() {
        return (
            <Form
                className="editProfileForm"
                onSubmit={e => {
                    this.editUser(e);
                }}>
                <Input
                    name="firstName"
                    value={this.state.firstName}
                    placeholder="First Name"
                    onChange={e => this.handleChange(e)}
                />
                <Input
                    name="lastName"
                    value={this.state.lastName}
                    placeholder="last Name"
                    onChange={e => this.handleChange(e)}
                />
                <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={e => this.handleChange(e)}
                />
                <Input
                    required
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Please re-enter password"
                    onChange={e => this.handleChange(e)}
                />
                <Button>Submit Changes</Button>
            </Form>
        );
    }
}
const mapStateToProps = state => {
    return {
        id: state._users.getUserByID.id,
        firstName: state._users.getUserByID.firstName,
        lastName: state._users.getUserByID.lastName,
        username: state._users.getUserByID.username,
        userRole: state._users.getUserByID.userRole,
        email: state._users.getUserByID.email
    };
};

export default connect(
    mapStateToProps,
    { updateUser, getUserInfo }
)(ProfileForm);
