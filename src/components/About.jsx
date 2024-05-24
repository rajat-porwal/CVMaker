const About = ({ isEditing, data, handleChange }) => {
  return (
    <div className="section">
      <h2>About</h2>
      {isEditing ? (
        <textarea
          value={data}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="About"
        />
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default About;
