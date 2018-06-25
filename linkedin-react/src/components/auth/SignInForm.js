import React from 'react'


class SignInForm extends React.Component {

	responseLinkedin = (response) => {
		fetch("http://localhost:3000/auth/linkedin")
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.log(err));
	};

	render() {
		return(
			<div>
				<button onClick={this.responseLinkedin}>SignInForm</button>
			</div>
		)
	};
};

export default SignInForm;