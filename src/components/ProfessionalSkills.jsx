const ProfessionalSkills = ({ isEditing, data, handleChange }) => {
  return (
    <div className="section">
      <h2>Professional Skills</h2>
      {isEditing ? (
        <div>
          <textarea
            value={data.programmingLanguages}
            onChange={(e) => handleChange('programmingLanguages', e.target.value)}
            placeholder="Programming Languages"
          />
          <textarea
            value={data.designTools}
            onChange={(e) => handleChange('designTools', e.target.value)}
            placeholder="Design Tools"
          />
          <textarea
            value={data.otherSkills}
            onChange={(e) => handleChange('otherSkills', e.target.value)}
            placeholder="Other Notable Skills"
          />
        </div>
      ) : (
        <div>
          <p>Programming Languages: {data.programmingLanguages}</p>
          <p>Design Tools: {data.designTools}</p>
          <p>Other Notable Skills: {data.otherSkills}</p>
        </div>
      )}
    </div>
  );
};

export default ProfessionalSkills;
