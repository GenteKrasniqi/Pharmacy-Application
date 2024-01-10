import React from 'react'
import Button from './button.js'
import { useState } from 'react';

import {postSubsInput}  from '../Http/Requests';

const Subscribe = () => {

  const [emailInput, setInput] = useState({  email: ''});
  const [error, setContactError] = useState(null);
  const [succesMessage, setError] = useState(null);
  
  
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const onSubmitHandler = async (e) => {
  e.preventDefault();

if (emailInput.email !== '' && emailRegex.test(emailInput.email)) {
  setContactError(null);
  try {
      if ((await postSubsInput(emailInput))) {
          setTimeout(() => {
              setInput({email: ''});
              setError('Glad to have you part of us!');
          }, 100);
          setTimeout(() => {
              setError(null);
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
        <input type="text" placeholder="Enter Your Email" value={emailInput.email} onChange={(e) => { setInput({ ...emailInput, email: e.target.value }); }} />
        <Button title='Subscribe'/>        
      </form>      
      <div className="outPut">
          {error !== null ?
                                <p className='ErrorMsg'>
                                    {error}
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
      
    </div>
  )
}

export default Subscribe;
