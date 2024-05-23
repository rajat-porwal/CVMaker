import GeneralInfo from './generalInfoSection';
import EducationExperience from './education';
import PracticalExperience from './experience';

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
