import React, { useState } from 'react';

const ContactInfo = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [contact, setContact] = useState({
    phone: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value
    });
  };

  return (
    <div className="section">
      <h2>Contact</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;