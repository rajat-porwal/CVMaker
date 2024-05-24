const EducationExperience = ({ isEditing, data, handleChange }) => {
  return (
    <div className="section">
      <h2>Educational Experience</h2>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={data.school} 
            onChange={(e) => handleChange('school', e.target.value)} 
            placeholder="School Name" 
          />
          <input 
            type="text" 
            value={data.title} 
            onChange={(e) => handleChange('title', e.target.value)} 
            placeholder="Title of Study" 
          />
          <input 
            type="date" 
            value={data.date} 
            onChange={(e) => handleChange('date', e.target.value)} 
            placeholder="Date of Study" 
          />
        </div>
      ) : (
        <div>
          <p>School Name: {data.school}</p>
          <p>Title of Study: {data.title}</p>
          <p>Date of Study: {data.date}</p>
        </div>
      )}
    </div>
  );
};

export default EducationExperience;
