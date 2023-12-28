import React from 'react'
import Button from './button.js'
import { useState } from 'react';

import {postSubsInput}  from '../Http/Requests';

const Subscribe = () => {

  const [emailInput, setInput] = useState({  email: ''});
  const [contactError, setContactError] = useState(null);
  const [succesMessage, setSuccesMessage] = useState(null);
  
  
const onSubmitHandler = async (e) => {
  e.preventDefault();

if (emailInput.email !== '') {
  setContactError(null);
  try {
      if ((await postSubsInput(emailInput))) {
          setTimeout(() => {
              setInput({email: ''});
              setSuccesMessage('Glad to have you part of us!');
          }, 100);
          setTimeout(() => {
              setSuccesMessage(null);
          }, 4000);
      }
  } catch (error) {
      setContactError('Something Went wrong please try again !');
  }

} else {
  setContactError('Please type your email correctly !');
}
}

  return (
    <div className='subsHolder'>
      
      <h5>Subscribe to our newsletter for seasonal promotions, health news and savings</h5>
      <form className="inputDiv"  onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Enter Your Email"  value={emailInput.email} onChange={(e) => { setInput({ ...emailInput, email: e.target.value }); }} />
        <Button title='Subscribe'/>        
      </form>      
        {contactError !== null ?
                                <p className='ErrorMsg'>
                                    {contactError}
                                </p>
                                :
                                null}

                            {succesMessage !== null ?
                                <p className='SuccessMsg'>
                                    {succesMessage}
                                </p>
                                :
                                null}
    </div>
  )
}

export default Subscribe;
