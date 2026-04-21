import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function ViewMembers(){
 const [members,setMembers]=useState([]);
 useEffect(()=>{axios.get('http://localhost:5000/api/members').then(r=>setMembers(r.data));},[]);
 return <div className='grid'>
 {members.map(m=><div className='card' key={m._id}>
   <img src={`http://localhost:5000/uploads/${m.image}`} alt='' />
   <h3>{m.name}</h3>
   <p>{m.role}</p>
   <Link className='btn small' to={`/members/${m._id}`}>View Details</Link>
 </div>)}
 </div>
}
