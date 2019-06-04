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
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email,
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
                    {this.props.user.firstName} {this.props.user.lastName}
                </h1>
                <p>Role: {this.props.user.userRole}</p>
                <p>Email: {this.props.user.email}</p>

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
        user: state._users.getUserByID,
        // id: state._users.loggedInUser.id,
        // firstName: state._users.loggedInUser.firstName,
        // lastName: state._users.loggedInUser.lastName,
        // username: state._users.loggedInUser.username,
        // userRole: state._users.loggedInUser.userRole,
        // email: state._users.loggedInUser.email,
        donationsByUser: state._donation_needs.donationsByUserId,
        isEditingUser: state._users.isLoading_UpdateUser
    };
};

export default connect(
    mapStateToProps,
    { getUserInfo, getDonationsByUserId }
)(Profile);
