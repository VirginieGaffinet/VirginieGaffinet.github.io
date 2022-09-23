// import css
import './Contact.css';
// fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHouseChimney, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import image
import linkedin from '../../assets/images/linkedin.png'
// import form
import { useForm } from 'react-hook-form';
// import emailjs
import emailjs from 'emailjs-com';
// import reCAPTCHA
import ReCAPTCHA from "react-google-recaptcha";
// import react
import React, { useRef } from 'react';
// import components
import Separator from '../Reusable/Separator/Separator';
import Modal from './Modal/Modal';

function Contact({isSend, setIsSend}) {
  const captchaRef = useRef(null);
  console.log(process.env.REACT_APP_SITE_KEY)

  // const handleSubmitCaptcha = (e) => {
  //   e.preventDefault();
  //   const token = captchaRef.current.getValue();
  //   captchaRef.current.reset();
  //   console.log(token);
  // };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data, e) => {
    const { lastName, firstName, email, subject, message } = data;
    try {
      const templateParams = {
        lastName,
        firstName,
        email,
        subject,
        message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      setIsSend(true)
      reset();
      e.preventDefault();
      const token = captchaRef.current.getValue();
      captchaRef.current.reset();
      console.log(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='contact-container' id='contact'>
      {isSend ? <Modal setIsSend={setIsSend}/> : ""}
      
      <div className='contact-title'>
        <h3 className='title-nav'>Contact</h3>
        <Separator />
      </div>
      <p className='contact-info'>Pour plus de renseignements, n'hésitez pas à me contacter !</p>
      <div className='contact-container-form'>
        <form 
          action="" 
          className='form' 
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <p className='required'><span>*</span>Champs obligatoires</p>
          <div className='input'>
            <label htmlFor='lastname' className='label'>Nom*</label>
            <input 
              type="text"
              id='lastname' 
              name='lastName'
              {...register('lastName', {
                required: { value: true, message: 'Veuillez entrer votre nom de famille' },
                maxLength: {
                value: 30,
                message: 'Please use 30 characters or less'
                }
              })} 
              placeholder="Votre nom" 
            />
             {errors.lastName && <span className='error-message'>{errors.lastName.message}</span>}
          </div>
          <div className='input'>
					  <label htmlFor='firstname' className='label'>Prénom*</label>
            <input 
              type="text" 
              id='firstname' 
              name='firstname'
              {...register('firstName', {
                required: { value: true, message: 'Veuillez entrer votre prénom' },
                maxLength: {
                value: 30,
                message: 'Please use 30 characters or less'
                }
              })} 
              placeholder="Votre prénom"
            />
            {errors.firstName && <span className='error-message'>{errors.firstName.message}</span>}
          </div>
          <div className='input'>
            <label htmlFor='email' className='label'>E-mail*</label>
            <input 
              type="text"
              id='email'
              name='email'
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
              placeholder="Votre e-mail"
            />
            {errors.email && (<span className='error-message'>Veuillez entrer une adresse e-mail valide</span>)}
          </div>
          <div className='input'>
					  <label htmlFor='message' className='label'>Message*</label>
            <textarea 
              name='message' 
              {...register('message', {
                required: true
              })}
              id='message' cols='20'
              rows='8' 
              placeholder="Laisser un message"
              >
            </textarea>
            {errors.message && <span className='error-message'>Veuillez entrer un message</span>}
          </div>
          <ReCAPTCHA 
            sitekey={process.env.REACT_APP_SITE_KEY}
            ref={captchaRef}
          />
					<input className='send-button' type="submit" value="Envoyer"/>
				</form>
        <div className='informations-container'>
          <div className='information'>
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            <a href='mailto:gaffinet.virginie@gmail.com'>gaffinet.virginie@gmail.com</a>
          </div>
          <div className='information'>
            <FontAwesomeIcon icon={faPhone} className='icon' />
            <a href='tel:0612278588'>0612278588</a>
          </div>
          <div className='information'>
            <FontAwesomeIcon icon={faHouseChimney} className='icon'/>
            <a href='https://www.google.fr/maps/place/Perpignan/@42.6990876,2.869492,13z/data=!3m1!4b1!4m5!3m4!1s0x12b06e4e80fd88fd:0x1c83306520f2dd4f!8m2!3d42.6886591!4d2.8948332' target="_blank" rel="noreferrer">Perpignan</a>
          </div>
          <a href='https://www.linkedin.com/in/virginie-gaffinet/' target='_blank' rel="noreferrer">
            <img src={linkedin} alt="linkedin" className='img-linkedin'></img>
          </a> 
        </div>
      </div>
    </div>
  )
};

export default Contact;