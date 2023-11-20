import React from 'react'
import PropTypes from 'prop-types'

function Login(props) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form style={{ minWidth: "500px" }}>
  <div class="form-group mb-4">
    <h2 className='mb-4' >Please Log In</h2>
    <label for="exampleInputEmail1" className='mb-3'>Email address</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group mb-4">
    <label for="exampleInputPassword1" className='mb-3'>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check mb-4">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>
    </div>
  )
}

Login.propTypes = {}

export default Login
