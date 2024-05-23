import { useState } from 'react';

const EducationExperience = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [school, setSchool] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="School Name" />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title of Study" />
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date of Study" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School Name: {school}</p>
          <p>Title of Study: {title}</p>
          <p>Date of Study: {date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationExperience;
