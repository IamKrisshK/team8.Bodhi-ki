import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddMember() {
  const navigate=useNavigate();
  const [form, setForm] = useState({
    name: '',
    rollNumber: '',
    year: '',
    degree: '',
    project: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aim: '',
    bio: ''
  });

  const [image, setImage] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(form).forEach(k => {
        if (k === 'hobbies') {
          const hobbiesArray = form.hobbies
            ? form.hobbies.split(',').map(h => h.trim())
            : [];
          data.append('hobbies', JSON.stringify(hobbiesArray));
        } else {
          data.append(k, form[k]);
        }
});
      data.append('image', image);

      await axios.post('http://localhost:5050/api/members', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Member Added');
      navigate('/members')
    } catch (err) {
      console.error(err);
      alert('Error adding member');
    }
  };

  return (
    <form className='card form' onSubmit={submit}>
      <h2>Add New Member</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        placeholder="Roll Number"
        value={form.rollNumber}
        onChange={e => setForm({ ...form, rollNumber: e.target.value })}
        required
      />

      <input
        placeholder="Year"
        value={form.year}
        onChange={e => setForm({ ...form, year: e.target.value })}
        required
      />

      <input
        placeholder="Degree"
        value={form.degree}
        onChange={e => setForm({ ...form, degree: e.target.value })}
        required
      />

      <textarea
        placeholder="About Project"
        value={form.project}
        rows={2}
        style={{ resize: 'none', maxHeight: '150px', overflowY: 'auto' }}
        onChange={e => {
          setForm({ ...form, project: e.target.value });
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + 'px';
        }}
        required
      />

      <input
        placeholder="Hobbies"
        value={form.hobbies}
        onChange={e => setForm({ ...form, hobbies: e.target.value })}
      />

      <input
        placeholder="Certificate"
        value={form.certificate}
        onChange={e => setForm({ ...form, certificate: e.target.value })}
      />

      <input
        placeholder="Internship"
        value={form.internship}
        onChange={e => setForm({ ...form, internship: e.target.value })}
      />

      <input
        placeholder="About Your Aim"
        value={form.aim}
        onChange={e => setForm({ ...form, aim: e.target.value })}
      />

      <textarea
        placeholder="Bio"
        value={form.bio}
        onChange={e => setForm({ ...form, bio: e.target.value })}
      />

      <input
        type="file"
        onChange={e => setImage(e.target.files[0])}
        required
      />

      <button className='btn'>Submit</button>
    </form>
  );
}