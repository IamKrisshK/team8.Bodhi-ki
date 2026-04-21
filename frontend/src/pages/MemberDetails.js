import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function MemberDetails(){
 const {id}=useParams();
 const [m,setM]=useState(null);
 useEffect(()=>{axios.get(`http://localhost:5050/api/members/${id}`).then(r=>setM(r.data));},[id]);
 if(!m) return <p>Loading...</p>;
 return <div className='card detail'>
   <img src={`http://localhost:5050/uploads/${m.image}`} alt='' />
   <h2>{m.name}</h2>
   <p><b>Role:</b> {m.role}</p>
   <p><b>Email:</b> {m.email}</p>
   <p><b>Contact:</b> {m.contact}</p>
   <p>{m.bio}</p>
 </div>
}
