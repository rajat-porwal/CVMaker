import { useState } from "react";

const GeneralInfo = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsEditing(false);
    };
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    return (
      <div>
        <h2>General Information</h2>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  };
  
  export default GeneralInfo;