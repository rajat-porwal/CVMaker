const PersonalSkills = ({ isEditing, data, handleChange }) => {
  return (
    <div className="section">
      <h2>Personal Skills</h2>
      {isEditing ? (
        <textarea
          value={data}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Personal Skills"
        />
      ) : (
        <div>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalSkills;
