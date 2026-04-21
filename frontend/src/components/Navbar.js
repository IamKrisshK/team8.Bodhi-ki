import { Link } from 'react-router-dom';
export default function Navbar(){
 return <nav className='nav'>
   <h2>Dream Team</h2>
   <div>
    <Link to='/'>Home</Link>
    <Link to='/add'>Add Member</Link>
    <Link to='/members'>View Members</Link>
   </div>
 </nav>
}
