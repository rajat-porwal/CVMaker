import React from 'react';
import GeneralInfo from './GeneralInfo';
import EducationExperience from './EducationExperience';
import PracticalExperience from './PracticalExperience';

const CVForm = () => {
  return (
    <div>
      <h1>CV Form</h1>
      <GeneralInfo />
      <EducationExperience />
      <PracticalExperience />
    </div>
  );
};

export default CVForm;
