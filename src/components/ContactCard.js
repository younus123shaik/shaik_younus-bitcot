import React, { useEffect, useState } from 'react'
import img from '../assets/images.png'
import { useNavigate } from 'react-router-dom'
const ContactCard = ({data,ind}) => {
  const [contacts, setContacts] = useState([]);
  const nav = useNavigate();
  const [dflag , setDflag]=useState(false)
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('data')) || [];
    setContacts(storedContacts);
  }, []);


  useEffect(() => {
    if(!dflag) return
    localStorage.setItem('data', JSON.stringify(contacts));
    setDflag(false);
  }, [contacts]);
  const handledel = () =>{
    setDflag(true);
    const updatedContacts = contacts.filter(contact => contact.id !== data.id);
    setContacts(updatedContacts);
  }
  return (
    <div className='card'>
        <div className='id'>{ind+1}</div>
        <div className='details'><img src={img} alt='Img' width={40} height={40}/>
        <div className='name'><span>{data.name}</span><span>{data.mobile}</span></div>
        </div>
        <div className='buttondiv'>
            <button onClick={()=>{nav(`/viewcontact/${data.id}`)}}>View</button>
            <button onClick={()=>{ nav(`/editcontact/${data.id}`)}}>Edit</button>
            <button onClick={handledel}>Del</button>
        </div>
    </div>
  )
}

export default ContactCard