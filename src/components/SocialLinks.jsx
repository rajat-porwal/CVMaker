const SocialLinks = ({ isEditing, data, handleChange }) => {
  return (
    <div className="section">
      <h2>Social</h2>
      {isEditing ? (
        <form>
          <label>Github:</label>
          <input
            type="text"
            value={data.github}
            onChange={(e) => handleChange('github', e.target.value)}
          />
          <br />
          <label>LinkedIn:</label>
          <input
            type="text"
            value={data.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
          />
        </form>
      ) : (
        <div>
          <p>Github: {data.github}</p>
          <p>LinkedIn: {data.linkedin}</p>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
