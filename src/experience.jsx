import  { useState } from 'react';

const PracticalExperience = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" />
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position Title" />
          <textarea value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} placeholder="Main Responsibilities" />
          <input type="text" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} placeholder="Date From" />
          <input type="text" value={dateTo} onChange={(e) => setDateTo(e.target.value)} placeholder="Date To" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company Name: {company}</p>
          <p>Position Title: {position}</p>
          <p>Main Responsibilities: {responsibilities}</p>
          <p>Date From: {dateFrom}</p>
          <p>Date To: {dateTo}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
