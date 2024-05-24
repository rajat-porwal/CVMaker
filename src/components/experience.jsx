const PracticalExperience = ({ isEditing, data, handleChange }) => {
  return (
    <div className="section">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={data.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Company Name"
          />
          <input
            type="text"
            value={data.position}
            onChange={(e) => handleChange('position', e.target.value)}
            placeholder="Position Title"
          />
          <textarea
            value={data.responsibilities}
            onChange={(e) => handleChange('responsibilities', e.target.value)}
            placeholder="Main Responsibilities"
          />
          <input
            type="date"
            value={data.dateFrom}
            onChange={(e) => handleChange('dateFrom', e.target.value)}
            placeholder="Date From"
          />
          <input
            type="date"
            value={data.dateTo}
            onChange={(e) => handleChange('dateTo', e.target.value)}
            placeholder="Date To"
          />
        </div>
      ) : (
        <div>
          <p>Company Name: {data.company}</p>
          <p>Position Title: {data.position}</p>
          <p>Main Responsibilities: {data.responsibilities}</p>
          <p>Date From: {data.dateFrom}</p>
          <p>Date To: {data.dateTo}</p>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
