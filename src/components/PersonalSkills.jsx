import React, { useState } from 'react';

const PersonalSkills = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [skills, setSkills] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setSkills(e.target.value);
  };

  return (
    <div className="section">
      <h2>Personal Skills</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={skills}
            onChange={handleChange}
            placeholder="Personal Skills"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{skills}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PersonalSkills;