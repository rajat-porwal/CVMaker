import { useState } from "react"

const EducationExperience = ({ education, onSubmit, onEdit }) => {
    const [isEditing, setIsEditing] = useState(true);
    const [school, setSchool] = useState(education.school);
    const [title, setTitle] = useState(education.title);
    const [date, setDate] = useState(education.date);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ school, title, date });
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
        onEdit();
    };


