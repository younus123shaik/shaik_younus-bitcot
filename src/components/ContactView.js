import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ContactView = () => {
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
  return (
    <div className='table'>
      <h1 className='main_head'>Contact Details</h1>
      <div className='data'>
       <div>
       <h3>Name : {name} </h3>
       <h3>Email : {email}</h3>
       <h3>Phone : {mobile}</h3>
      <h3>Address : {address}</h3>
      <button className='buttondiv' onClick={()=>{nav('/')}}>Back</button>
        </div> 
      </div>
    </div>
  )
}

export default ContactView