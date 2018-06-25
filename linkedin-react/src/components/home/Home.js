import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (
			<div>
				hello
				<Link to="/auth/signin" exact>Signin</Link>
			</div>
		);
	};
};

export default Home;
