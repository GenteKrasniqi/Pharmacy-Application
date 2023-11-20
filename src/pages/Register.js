import React from 'react'
import '../../src/index.css'

function Register() {
  return (
    <div style={ {display: "flex",justifyContent: "center", marginBottom:"50px"} } >
      <div >
        <div style={{textAlign:"center"}} class='mt-5'>
        <h3>Welcome to Pharm Store, User!</h3>
        <h5>Register to our Application here</h5></div>
    <div class="form-row"  >
      <div class="col-md-4  mb-3" style={{ width:"100%"}}>
        <label for="validationServer01">First name</label>
        <input type="text" class="form-control " id="validationServer01" placeholder="First name" required/>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4" style={{ width:"100%"}}>
        <label for="validationServer02">Last name</label>
        <input type="text" class="form-control mb-3" id="validationServer02" placeholder="Last name" required/>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4"style={{ width:"100%"}}>
        <label for="validationServerUsername">Email</label>
        <div class="input-group">
          <div class="input-group-prepend">
          </div>
          <input type="text" class="form-control mb-3" id="validationServerEmail" placeholder="Email" aria-describedby="inputGroupPrepend3" required/>
          <div class="invalid-feedback">
            Please type you Email.
          </div>
        </div>
      </div>
    </div>
    <div class="form-row"  >
      <div class="col-md-6"style={{ width:"100%"}}>
        <label for="validationServer03">City</label>
        <input type="text" class="form-control mb-3" id="validationServer03" placeholder="City" required/>
        <div class="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div class="col-md-3"style={{ width:"100%"}}>
        <label for="validationServer04">State</label>
        <input type="text" class="form-control mb-3" id="validationServer04" placeholder="State" required/>
        <div class="invalid-feedback">
          Please provide a valid state.
        </div>
      </div>
      <div class="col-md-3" style={{ width:"100%"}}>
        <label for="validationServer05">Zip</label>
        <input type="text" class="form-control mb-3" id="validationServer05" placeholder="Zip" required/>
        <div class="invalid-feedback mb-2">
          Please provide a valid zip.
        </div>
      </div>
    </div>
    <div class="form-group"  >
      <div class="form-check">
        <input class="form-check-input mb-3" type="checkbox" value="" id="invalidCheck3" required/>
        <label class="form-check-label mb-3" for="invalidCheck3">
          Agree to terms and conditions
          </label>
        <div class="invalid-feedback mb-5">
          You must agree before submitting.
        </div>
      </div>
    </div>
    <button class="btn btn-success " type="submit">Submit form</button>
  </div></div>
  )
}

Register.propTypes = {}

export default Register
