import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [contacts, setContacts] = useState([]);
  const nav = useNavigate();


  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('data')) || [];
    setContacts(storedContacts);

    const currentContact = storedContacts.find((contact) => contact.id === parseInt(id));
    if (currentContact) {
      setContact(currentContact);
      setName(currentContact.name);
      setEmail(currentContact.email);
      setMobile(currentContact.mobile);
      setAddress(currentContact.address);
    }
  }, [id]);

  const handleSave = () => {
    const updatedContacts = contacts.map((c) =>
      c.id === contact.id ? { ...c, name, email, mobile, address } : c
    );

    setContacts(updatedContacts);
    localStorage.setItem('data', JSON.stringify(updatedContacts));
    nav('/');
  };


  return (
    <div className='table'>
      <h1 className='main_head'>Edit Contact</h1>
      <form className='data' onSubmit={handleSave}>
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
          <button type="submit">Update</button>

        </div>
      </form>
    </div>
  );
}

export default EditContact;
