import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MemberDetails() {
  const { id } = useParams();
  const [m, setM] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:5050/api/members/${id}`)
    .then(res => setM(res.data))
    .catch(() => setError('Failed to load member details'));
  }, [id]);
  
  if (error) return <p>{error}</p>;
  if (!m) return <p>Loading...</p>;
  const hobbiesArray = m.hobbies
    ? Array.isArray(m.hobbies)
      ? m.hobbies
      : m.hobbies.split(',').map(h => h.trim())
    : [];

  return (
    <div className='card detail'>

      {/* Profile Image */}
      <img
        src={`http://localhost:5050/uploads/${m.image}`}
        alt={m.fullName}
        onError={(e) => e.target.src = '/default.png'}
      />

      <h2>{m.name}</h2>
      <p className='subHead'> {m.degree} | {m.year}</p>
      <p><b>Roll Number:</b> {m.rollNumber}</p>
      <p><b>Project:</b> {m.project}</p>
      <p><b>Certificate:</b> {m.certificate}</p>
      <p><b>Internship:</b> {m.internship}</p>
      <p><b>About Your Aim:</b> {m.aim}</p>
      <div className="hobbies">
        {hobbiesArray.map((hobby, index) => (
          <span key={index} className={`tag tag-${index % 5}`}>
            {hobby}
          </span>
        ))}
      </div>
      <p><b>Bio:</b> {m.bio}</p>

    </div>
  );
}