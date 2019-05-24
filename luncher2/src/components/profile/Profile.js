import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo, getDonationsByUserId } from '../../actions';
import ProfileForm from './ProfileForm';
import { Button } from 'reactstrap';
import UserDonations from './UserDonations';
import '../../styles/profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            isEditingUser: false
        };
    }
    componentDidMount() {
        let userToken = localStorage.getItem('userToken');
        let userID = localStorage.getItem('userID');

        this.props.getUserInfo(userToken);
        this.props.getDonationsByUserId(userID);
        this.setState({
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
            isEditingUser: false
        });
    }
    componentDidUpdate = prevProps => {
        let userToken = localStorage.getItem('userToken');

        if (this.props.user !== prevProps.user) {
            if (this.props.isEditingUser) {
                this.props.getUserInfo(userToken);
            }
        }
    };
    toggleEdit = e => {
        e.preventDefault();
        this.setState({
            isEditingUser: !this.state.isEditingUser
        });
    };
    render() {
        return (
            <div className="profileWrapper">
                <h1>
                    {this.props.firstName} {this.props.lastName}
                </h1>
                <p>Role: {this.props.userRole}</p>
                <p>Email: {this.props.email}</p>

                <Button
                    onClick={e => {
                        this.toggleEdit(e);
                    }}>
                    {this.state.isEditingUser ? 'Close' : 'Edit Profile'}
                </Button>
                {this.state.isEditingUser ? (
                    <ProfileForm isEditingUser={this.state.isEditingUser} />
                ) : null}
                {this.props.user.userRole === 'admin' ? (
                    <div className="userDonationsWrapper">
                        <h1>My Donation Requests</h1>
                        <div className="userDonationsList">
                            {this.props.donationsByUser.map(donation => (
                                <UserDonations
                                    key={donation.id}
                                    donation={donation}
                                />
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        id: state.id,
        firstName: state.firstName,
        lastName: state.lastName,
        username: state.username,
        userRole: state.userRole,
        email: state.email,
        donationsByUser: state.donationsByUser,
        isEditingUser: state.isEditingUser
    };
};

export default connect(
    mapStateToProps,
    { getUserInfo, getDonationsByUserId }
)(Profile);
