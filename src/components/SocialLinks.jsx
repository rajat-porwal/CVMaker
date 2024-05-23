import { useState } from 'react';

const SocialLinks = () => {
  const [github, setGithub] = useState('rajat-porwal');
  const [linkedin, setLinkedin] = useState('javanfriedel');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="section">
      <h2>Social</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>Github:</label>
          <input
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <br />
          <label>LinkedIn:</label>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Github: {github}</p>
          <p>LinkedIn: {linkedin}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
