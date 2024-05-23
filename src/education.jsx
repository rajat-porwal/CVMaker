function SubmitEducation({ schoolName, studyTitle, dateOfStudy, status, setStatus }) {
    const [disabled, setDisabled] = useState(false);
  
    const submitAction = () => {
      setDisabled(true);
      const educationInfo = `${studyTitle} at ${schoolName}, studied from ${dateOfStudy}`;
      const paragraph = document.createElement('p');
      paragraph.textContent = educationInfo;
      document.getElementById('CVHtml').appendChild(paragraph);
      const inputs = document.querySelectorAll("input[type='text']");
      inputs.forEach(input => input.classList.add('invisible'));
    };

    return (
        <button onClick={submitAction} disabled={disabled}>
          Submit Education
        </button>
      );
}

