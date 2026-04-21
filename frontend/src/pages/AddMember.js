import { useState } from 'react';
import axios from 'axios';
export default function AddMember(){
 const [form,setForm]=useState({name:'',role:'',email:'',contact:'',bio:''});
 const [image,setImage]=useState(null);
 const submit=async(e)=>{
  e.preventDefault();
  const data=new FormData();
  Object.keys(form).forEach(k=>data.append(k,form[k]));
  data.append('image',image);
  await axios.post('http://localhost:5050/api/members',data);
  alert('Member Added');
 };
 return <form className='card form' onSubmit={submit}>
  <h2>Add New Member</h2>
  {['name','role','email','contact'].map(f=><input key={f} placeholder={f} onChange={e=>setForm({...form,[f]:e.target.value})} required />)}
  <textarea placeholder='Bio' onChange={e=>setForm({...form,bio:e.target.value})}></textarea>
  <input type='file' onChange={e=>setImage(e.target.files[0])} required />
  <button className='btn'>Submit</button>
 </form>
}
