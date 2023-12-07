import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

	const [logInForm, setLogInForm] = useState({ email: '', password: '' });
	const [logInError, setLogInError] = useState(null);

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		const passRegex = /^(?=.*[A-Z]).{8,}$/;


		if (logInForm.email !== '' && logInForm.password !== '' && emailRegex.test(logInForm.email) && passRegex.test(logInForm.password)) {
			setLogInError(null);


			// try {
			// 	const response = await login(logInForm);

			// 	if (response.status === 200) {
			// 		const user = response.data.data;
			// 		window.localStorage.setItem('Email',user.email);
			// 		window.localStorage.setItem('Role',user.role);
			// 		window.location.replace('/dashboard/stock');
			// 	}

			// } catch (error) {

			// 	setLogInError('Something Went wrong please try again !');

			// }

		} else {
			setLogInError('Please fill all the fields correctly and try again !');
		}

	}


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form style={{ minWidth: "450px" }} action="/" method="POST" encType="multipart/form-data" onSubmit={onSubmitHandler}>
        <div class="form-group mb-4">
          <h2 className='mb-4' >Please Log In here</h2>
          <label for="exampleInputEmail1" className='mb-3'>Enter Email</label>
          <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={logInForm.email} onChange={(e) => { setLogInForm({ ...logInForm, email: e.target.value }); }}  />
        </div>
        <div class="form-group mb-4">
          <label for="exampleInputPassword1" className='mb-3'>Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={logInForm.password} onChange={(e) => { setLogInForm({ ...logInForm, password: e.target.value }); }}/>
        </div>
        <div class="form-check">
        </div>
        
					{
						logInError !== null ?
							<p className='ErrorMsg'>
								{logInError}
							</p>
							:
							null
					}
      
        <button type="submit" class="btn btn-success">Log In</button>

				</form>
    </div>
  )
}

export default Login;
