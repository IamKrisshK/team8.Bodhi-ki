import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';

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
