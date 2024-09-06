import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [contacts, setContacts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('data')) || [];
    setContacts(storedContacts);
  }, []);


  useEffect(() => {
    if(contacts.length != 0){
    localStorage.setItem('data', JSON.stringify(contacts));
    }
  }, [contacts]);

 console.log(contacts)
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = contacts.length+1
    const contact = {
      id,
      name,
      email,
      mobile,
      address,
    };

    setContacts((prev) => [...prev, contact]);

    setName('');
    setEmail('');
    setMobile('');
    setAddress('');
  };

  const handleReset = (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setMobile('');
    setAddress('');
  };

  return (
    <div className='table'>
      <h1 className='main_head'>Add Contact</h1>
      <form className='data' onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          placeholder='Enter Your Name'
          className='input'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email: </label>
        <input
          type='email'
          placeholder='Enter Your Email'
          className='input'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>PhoneNumber: </label>
        <input
          type='tel'
          placeholder='Enter Your Phone Number'
          className='input'
          required
          maxLength="10"
          pattern="\d{10}"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <label>Address: </label>
        <textarea
          placeholder='Enter Your Address'
          className='textarea'
          required
          maxLength={300}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className='buttondiv'>
          <button type="submit">Submit</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={()=>{nav('/')}}>Close</button>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
