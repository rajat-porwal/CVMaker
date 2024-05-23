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
  return (
    <div className="cv-form">
      <h1>CV Form</h1>
      <GeneralInfo />
      <About />
      <EducationExperience />
      <PracticalExperience />
      <ProfessionalSkills />
      <PersonalSkills />
      <Languages />
      <ContactInfo />
      <SocialLinks />
    </div>
  );
};

export default CVForm;
