import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [search , setSearch] = useState("");
    const [flag , setFlag] = useState(false);
    const [filteredData, setFilteredData] = useState("");
    const nav = useNavigate()
    useEffect(() => {
      if(flag) return
        fetch('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            const dt = JSON.parse(localStorage.getItem('data'));
            if( dt && dt.length!=0){
              setData(dt)
            }
            else{
              localStorage.setItem('data',JSON.stringify(data));
              setData(data)
              
            }
          })
          .catch(error => {
            setError(error);
          });
      }, [data]);
      useEffect(() => {
        const handlesearch = () =>{
          if (!data) return;
          const searchQuery = search.toLowerCase();
    
          // Filter data based on search query
          const filtered = data && data.filter(
            (contact) =>
              contact.name.toLowerCase().includes(searchQuery) ||
              contact.email.toLowerCase().includes(searchQuery) ||
              contact.mobile.toLowerCase().includes(searchQuery)
          );
          setData(filtered);
        };
    
        handlesearch();
      if(search.length == 0){
        setFlag(false);
      }
      }, [search])
      
  return (
    <div className='table'>
        <h1 className='main_head'>All Contacts</h1>
        <div className='fsearch'>
        <input className='search' placeholder='Search Contact...' onChange={(e)=>{setSearch(e.target.value);setFlag(true)}}/>
        <button onClick={()=>{nav('/addcontact')}}>Add Contact</button>
        </div>
        {data && data.map( (contact,ind) => (

            <ContactCard key={ind} ind ={ind} data = {contact}/>
        
        )) }
    </div>
  )
}

export default Home