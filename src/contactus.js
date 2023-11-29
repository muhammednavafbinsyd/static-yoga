import React, { useState } from 'react';
import Contactusimg from './images/banner7imgd.png';
import './contactus.css';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [place, setPlace] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [addressError, setAddressError] = useState('')
  const [placeError, setPlaceError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function FormSubmit() {
    if (name === '') {
      setNameError('Enter a name')
    } else {
      setNameError('')
    }

    if (email === '') {
      setEmailError('Enter a email')
    } else {
      setEmailError('')
    }

    if (phone === '') {
      setPhoneError('Enter a phone number')
    } else {
      setPhoneError('');
    }

    if (address === '') {
      setAddressError('Enter a address')
    } else {
      setAddressError('')
    }

    if (place === '') {
      setPlaceError('Enter a place')
    } else {
      setPlaceError('')
    }

    if (name !== '' && email !== '' && phone !== '' && address !== '' && place !== '') {
      setSubmitted(true)
    } else {
      setSubmitted(false)
    }
  }

  return (
    <div className="maindiv">
      <div className="contactusimg">
        <img src={Contactusimg} className="imgcontact" alt="" />
        <div className="all-input">
          <div className="inputdata">
            <input
              className="input-s"
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={nameError ? { border: '1px solid red' } : {}}
            />
            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}

            <input
              className="input-s"
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={emailError ? { border: '1px solid red' } : {}}
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

            <input
              className="input-s"
              type="number"
              placeholder="Phone number"
              id="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={phoneError ? { border: '1px solid red' } : {}}
            />
            {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}

            <input
              className="input-s"
              type="text"
              placeholder="Address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={addressError ? { border: '1px solid red' } : {}}
            />
            {addressError && <p style={{ color: 'red' }}>{addressError}</p>}

            <input
              className="input-s"
              type="text"
              placeholder="Place"
              id="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              style={placeError ? { border: '1px solid red' } : {}}
            />
            {placeError && <p style={{ color: 'red' }}>{placeError}</p>}

            <button onClick={FormSubmit}>Submit</button>
          </div>

          {submitted && (
            <div className="submitted-data">
              <h3 style={{ fontWeight: 'bolder', fontSize: '2rem', textDecoration: 'underline', textDecorationThickness: '7px' }}>YOUR DATA</h3>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Address: {address}</p>
              <p>Place: {place}</p>
            </div>
          )}
        </div>

        <div className="c-text">
          <h4 className="icons">
            <FaFacebookF className="fa" />Facebook
          </h4>
          <h4 className="icons">
            <FaWhatsapp className="fa" />Whatsapp
          </h4>
          <h4 className="icons">
            <FaInstagram className="fa" />Instagram
          </h4>
          <h4 className="icons">
            <FaTwitter className="fa" />Twitter
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
