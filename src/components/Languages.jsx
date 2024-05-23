import React, { useState } from 'react';

const Languages = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [languages, setLanguages] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setLanguages(e.target.value);
  };

  return (
    <div className="section">
      <h2>Languages</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={languages}
            onChange={handleChange}
            placeholder="Languages"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{languages}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Languages;