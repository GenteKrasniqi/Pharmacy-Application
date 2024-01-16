import React from 'react'
import { useState } from 'react';

//Http Request
import { login } from '../Http/Requests';
function Login() {

	const [logInForm, setLoginForm] = useState({ email: '', password: '' });
	const [error, setError] = useState(null);

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		const passRegex = /^(?=.*[A-Z]).{8,}$/;

		if (logInForm.email !== '' && logInForm.password !== '' && emailRegex.test(logInForm.email) && passRegex.test(logInForm.password)) {
			setError(null);
			try {
				const response = await login(logInForm); 
				const user = response.data;
				console.log(response)
				window.localStorage.setItem('Email', user.email);
				window.localStorage.setItem('Role', user.role);
				window.location.replace('/dashboard');
			} catch (error) {
				setError('Oops! Access denied.');
			}
		} else {
			setError('Type your email and password correctly  !');
		}
	}

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<form className="formStyle" action="/" method="POST" encType="multipart/form-data" onSubmit={onSubmitHandler}>
				<div className="form-group mb-4">
					<h2 className='mb-4' style={{ textAlign: "center" }} >Please Log In here</h2>
					<label htmlFor="exampleInputEmail1" className='mb-3' >Enter Email</label>
					<input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={logInForm.email} onChange={(e) => { setLoginForm({ ...logInForm, email: e.target.value }); }} />
				</div>
				<div className="form-group mb-4">
					<label htmlFor="exampleInputPassword1" className='mb-3'>Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={logInForm.password} onChange={(e) => { setLoginForm({ ...logInForm, password: e.target.value }); }} />
				</div>
				<div className="form-check">
				</div>
				{
					error !== null ?
						<p className='ErrorMsg'>
							{error}
						</p>
						:
						null
				}
				<button type="submit" className="btn btn-success">Log In</button>

			</form>
		</div>
	)
}

export default Login;
