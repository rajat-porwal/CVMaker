import React, { useState } from 'react';

const About = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [about, setAbout] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setAbout(e.target.value);
  };