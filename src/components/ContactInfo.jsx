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