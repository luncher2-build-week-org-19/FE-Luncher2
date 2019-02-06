import React from 'react';
import { connect } from 'react-redux';

class Error extends React.Component {
	render() {
		return (
			<div>
				<p className={this.props.deleteError ? 'error' : 'hide'}>
					{this.props.deleteError ? 'Not authorized to delete' : null}
				</p>
				<p className={this.props.editError ? 'error' : 'hide'}>
					{this.props.editError ? 'Not authorized to edit' : null}
				</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		deleteError: state.deleteError,
		editError: state.editError,
	};
};

export default connect(
	mapStateToProps,
	{}
)(Error);
