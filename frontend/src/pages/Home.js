import { Link } from 'react-router-dom';
export default function Home(){
 return <div className='hero'>
   <h1>Welcome to Team 8</h1>
   <h3>From the creators of Bodhi-Ki<h3>
   <p>Manage your student team members.</p>
   <div className='btnRow'>
    <Link className='btn' to='/add'>Add Member</Link>
    <Link className='btn outline' to='/members'>View Members</Link>
   </div>
 </div>
}
