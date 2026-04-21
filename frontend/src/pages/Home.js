import { Link } from 'react-router-dom';
export default function Home(){
 return <div className='hero'>
   <h1>Team 8</h1>
   <h3>Welcome to Team 8 Management</h3>
   <div className='btnRow'>
   <p>Manage your team members.</p>
    <Link className='btn' to='/add'>Add Member</Link>
    <Link className='btn outline' to='/members'>View Members</Link>
   </div>
 </div>
}
