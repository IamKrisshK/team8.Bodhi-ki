import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import AddMember from './pages/AddMember.js';
import ViewMembers from './pages/ViewMembers.js';
import MemberDetails from './pages/MemberDetails.js';

export default function App(){
 return (
 <BrowserRouter>
   <Navbar />
   <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<AddMember/>} />
      <Route path='/members' element={<ViewMembers/>} />
      <Route path='/members/:id' element={<MemberDetails/>} />
    </Routes>
   </div>
 </BrowserRouter>
 )}
