import Button from '../components/button';
import { useState } from 'react';
import Faq from '../components/Faq';
import React from 'react';
import BestSellers from '../components/Brand.js';
import Box from '../components/Box.js';

// Http Request
import { postContactForm } from '../Http/Requests';

const Contact = () => {
    const [conactForm, setContactForm] = useState({ fullName: '', email: '', adress: '', msg: '' });
    const [contactError, setContactError] = useState(null);
    const [succesMessage, setSuccesMessage] = useState(null);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const nameRegex = /^[\p{L}a-zA-Z ]*$/u;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (conactForm.fullName !== '' && nameRegex.test(conactForm.fullName) && conactForm.email !== '' && emailRegex.test(conactForm.email) && conactForm.adress !== '' && conactForm.msg !== '') {
            setContactError(null);
            try {
                if ((await postContactForm(conactForm))) {
                    setTimeout(() => {
                        setContactForm({ fullName: '', email: '', adress: '', msg: '' });
                        setSuccesMessage('Your message has been sent sucessfully!');
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

            <Box h2={'How Can We Help You ?'} />


            <div className='ContactContainer'>
                <div className="containerContat">
                    <div className="contentContact">
                        <div className="left">
                            <div className="address d">
                                <div className="topic">&nbsp;&nbsp;&nbsp;<b>Pharm Store</b></div>
                                <div className="one">Kosovo Southeast Europe</div>
                            </div>
                            <div className="phone d">
                                <div className="topic">&nbsp;&nbsp;&nbsp;<b>Phone</b></div>
                                <div className="one">+383 46 456-789</div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="topic-txt">Get In Touch With Us</div><br />
                            <p>
                                Our staff typically responds in minutes, feel free to get in touch with us!
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
                                    <textarea id="contactMessage" name="message" placeholder="Type your message / question here ... " value={conactForm.msg} onChange={(e) => { setContactForm({ ...conactForm, msg: e.target.value }); }}></textarea>
                                </div>

                                <Button type={'submit'} title={"Send"} ></Button>
                            </form>
                            <div className="outPut">
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
                        </div>
                    </div>

                </div>

            </div><div className='faqndsubs'>
                <Faq />
                <div className='bestSeller'>
                    <BestSellers h3={'Your favorite brands, all here!'} />
                </div>
            </div>
        </></>
    );
}

export default Contact;