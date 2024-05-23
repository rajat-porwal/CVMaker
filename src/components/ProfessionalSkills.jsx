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