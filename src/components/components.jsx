import  { useState } from 'react';
import GeneralInfo from './generalInfoSection';
import EducationExperience from './education';
import PracticalExperience from './experience';
import ProfessionalSkills from './ProfessionalSkills';
import PersonalSkills from './PersonalSkills';
import Languages from './Languages';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import About from './About';

const CVForm = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    generalInfo: { name: '', email: '', phone: '' },
    about: '',
    educationExperience: { school: '', title: '', date: '' },
    practicalExperience: { company: '', position: '', responsibilities: '', dateFrom: '', dateTo: '' },
    professionalSkills: { programmingLanguages: '', designTools: '', otherSkills: '' },
    personalSkills: '',
    languages: '',
    contactInfo: { phone: '', email: '' },
    socialLinks: { github: 'rajat-porwal', linkedin: 'javanfriedel' }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleChange = (section, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value
      }
    }));
  };

  return (
    <div className="cv-form">
      <h1>CV Form</h1>
      <form onSubmit={handleSubmit}>
        <GeneralInfo 
          isEditing={isEditing} 
          data={formData.generalInfo} 
          handleChange={(field, value) => handleChange('generalInfo', field, value)} 
        />
        <About 
          isEditing={isEditing} 
          data={formData.about} 
          handleChange={(value) => handleChange('about', null, value)} 
        />
        <EducationExperience 
          isEditing={isEditing} 
          data={formData.educationExperience} 
          handleChange={(field, value) => handleChange('educationExperience', field, value)} 
        />
        <PracticalExperience 
          isEditing={isEditing} 
          data={formData.practicalExperience} 
          handleChange={(field, value) => handleChange('practicalExperience', field, value)} 
        />
        <ProfessionalSkills 
          isEditing={isEditing} 
          data={formData.professionalSkills} 
          handleChange={(field, value) => handleChange('professionalSkills', field, value)} 
        />
        <PersonalSkills 
          isEditing={isEditing} 
          data={formData.personalSkills} 
          handleChange={(value) => handleChange('personalSkills', null, value)} 
        />
        <Languages 
          isEditing={isEditing} 
          data={formData.languages} 
          handleChange={(value) => handleChange('languages', null, value)} 
        />
        <ContactInfo 
          isEditing={isEditing} 
          data={formData.contactInfo} 
          handleChange={(field, value) => handleChange('contactInfo', field, value)} 
        />
        <SocialLinks 
          isEditing={isEditing} 
          data={formData.socialLinks} 
          handleChange={(field, value) => handleChange('socialLinks', field, value)} 
        />
        <button type="submit">{isEditing ? 'Submit' : 'Edit'}</button>
      </form>
    </div>
  );
};

export default CVForm;
