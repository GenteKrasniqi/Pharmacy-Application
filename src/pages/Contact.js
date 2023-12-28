import Button from '../components/button';
import { useState } from 'react';
import Faq from '../components/Faq';
import React from 'react';
import BestSellers from '../components/Brand.js';
import Box from '../components/Box.js';
// Http Requests
import { postContactForm } from '../Http/Requests';

const Contact = () => {
    const [conactForm, setContactForm] = useState({ fullName: '', email: '', adress: '', msg: '' });
    const [contactError, setContactError] = useState(null);
    const [succesMessage, setSuccesMessage] = useState(null);
    


    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const nameRegex = /^[a-zA-Z ]*$/;

        if (conactForm.fullName !== '' && nameRegex.test(conactForm.fullName) && conactForm.email !== '' && emailRegex.test(conactForm.email) && conactForm.adress !== '' && conactForm.msg !== '') {
            setContactError(null);
            try {
                if ((await postContactForm(conactForm))) {
                    setTimeout(() => {
                        setContactForm({ fullName: '', email: '', adress: '', msg: '' });
                        setSuccesMessage('Thank you for meesaging us. Your message has been sent sucessfully and you will be texted soon by email!');
                    }, 100);
                    setTimeout(() => {
                        setSuccesMessage(null);
                    }, 4000);
                }
            } catch (error) {
                setContactError('Something Went wrong please try again !');
            }

        } else {
            setContactError('Please fill all the fields correctly and try again !');
        }
    }
    return ( 
        <><>
            <Box h2={'Contact Us Here'}/>
        <div className='ContactContainer'>          
            <div className="containerContat">
                <div className="contentContact">
                    <div className="left">
                        <div className="address d">
                            <div className="topic">&nbsp;&nbsp;&nbsp;<b>Pharmacy</b></div>
                            <div className="one">Kosovo Southeast Europe</div>
                        </div>
                        <div className="phone d">
                            <div className="topic">&nbsp;&nbsp;&nbsp;<b>Phone</b></div>
                            <div className="one">+383 49 303 564</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="topic-txt">How can we help you ?</div><br />
                        <p>
                            If you did not found your answer already, please write it down here<br />
                            <b>Our pharmacists typically reply within 30 minutes</b>
                        </p>

                        <form action="/" method="POST" encType="multipart/form-data" onSubmit={onSubmitHandler}>
                            <div className="input-box">
                                <input id="contactName" name="fullName" type="text" placeholder="Full Name" value={conactForm.fullName} onChange={(e) => { setContactForm({ ...conactForm, fullName: e.target.value }); }} />
                            </div>

                            <div className="input-box ">
                                <input id="contactEmail" name="email" type="text" placeholder="Email" value={conactForm.email} onChange={(e) => { setContactForm({ ...conactForm, email: e.target.value }); }} />
                            </div>

                            <div className="input-box ">
                                <input id="contactAdress" name="adress" type="text" placeholder="Adress" value={conactForm.adress} onChange={(e) => { setContactForm({ ...conactForm, adress: e.target.value }); }} />
                            </div>

                            <div className="input-box message">
                                <textarea id="contactMessage" name="message" placeholder="Your message or question goes here" value={conactForm.msg} onChange={(e) => { setContactForm({ ...conactForm, msg: e.target.value }); }}></textarea>
                            </div>

                            {contactError !== null ?
                                <b className='ErrorMsg'>
                                    {contactError}
                                </b>
                                :
                                null}

                            {succesMessage !== null ?
                                <b className='SuccessMsg'>
                                    {succesMessage}
                                </b>
                                :
                                null}

                            <Button type={'submit'} title={"Send"} ></Button>

                        </form>
                    </div>
                </div>
            </div>
        </div><div>
                <Faq />
            </div></><div className='bestSeller'>
                <BestSellers h3={'Your favorite brands, all here!'} />
            </div></>
    );
 }

export default Contact;