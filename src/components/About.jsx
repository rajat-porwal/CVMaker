import React, { useState } from 'react';

const About = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [about, setAbout] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setAbout(e.target.value);
  };

  return (
    <div className="section">
      <h2>About</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={about}
            onChange={handleChange}
            placeholder="About"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{about}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default About;