import React from 'react';
import Login from './Login';

const authenticateHOC = App =>
	class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				loggedIn: false,
			};
		}

		componentDidMount = () => {
			if (!localStorage.getItem('userToken')) {
				this.setState({
					loggedIn: false,
				});
			} else if (localStorage.getItem('userToken')) {
				this.setState({
					loggedIn: true,
				});
			}
		};

		render() {
			if (this.state.loggedIn) {
				return <App />;
			} else if (!this.state.loggedIn) {
				return <Login />;
			}
		}
	};

export default authenticateHOC;
