onst ProfessionalSkills = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [skills, setSkills] = useState({
      programmingLanguages: '',
      designTools: '',
      otherSkills: ''
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
      setSkills({
        ...skills,
        [name]: value
      });
    };
    
    return (
        <div className="section">
          <h2>Professional Skills</h2>
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <textarea
                name="programmingLanguages"
                value={skills.programmingLanguages}
                onChange={handleChange}
                placeholder="Programming Languages"
              />
              <textarea
                name="designTools"
                value={skills.designTools}
                onChange={handleChange}
                placeholder="Design Tools"
              />
              <textarea
                name="otherSkills"
                value={skills.otherSkills}
                onChange={handleChange}
                placeholder="Other Notable Skills"
              />
              <button type="submit">Submit</button>
            </form>
          ) :