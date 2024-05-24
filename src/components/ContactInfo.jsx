const ContactInfo = ({ isEditing, data, handleChange }) => {
  return (
    <div className="section">
      <h2>Contact</h2>
      {isEditing ? (
        <div>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="Phone"
          />
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Email"
          />
        </div>
      ) : (
        <div>
          <p>Phone: {data.phone}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
