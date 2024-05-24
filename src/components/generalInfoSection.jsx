const GeneralInfo = ({ isEditing, data, handleChange }) => {
  return (
    <div className="section">
      <h2>General Information</h2>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={data.name} 
            onChange={(e) => handleChange('name', e.target.value)} 
            placeholder="Name" 
          />
          <input 
            type="email" 
            value={data.email} 
            onChange={(e) => handleChange('email', e.target.value)} 
            placeholder="Email" 
          />
          <input 
            type="tel" 
            value={data.phone} 
            onChange={(e) => handleChange('phone', e.target.value)} 
            placeholder="Phone" 
          />
        </div>
      ) : (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
