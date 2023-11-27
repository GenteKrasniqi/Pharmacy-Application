import React from 'react'

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form style={{ minWidth: "450px" }}>
  <div class="form-group mb-4">
    <h2 className='mb-4' >Please Log In here</h2>
    <label for="exampleInputEmail1" className='mb-3'>Enter Email</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group mb-4">
    <label for="exampleInputPassword1" className='mb-3'>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
  </div>
  <button type="submit" class="btn btn-success">Log In</button>
</form>
    </div>
  )
}

export default Login;
