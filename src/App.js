import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactView from './components/ContactView';
import EditContact from './components/EditContact';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addcontact' element={<AddContact/>}/>
          <Route path='/viewcontact/:id' element={<ContactView/>}/>
          <Route path='/editcontact/:id' element={<EditContact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
