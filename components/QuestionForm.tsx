import React, { useState } from 'react';
import styles from '@/styles/componentStyles/form.module.scss'
import ListItem from './ListItem';


function QuestionForm(props: any) {
    function handleStateChange(e: any, stateChange: any) {
        stateChange(e.target.value)
    }



    const objBuilder = () => {
        const infoToSend = {
            name: name,
            bio: bio,
            workHistory: workHistory,
            skills: skills,
            accomplishments: accomplishments,
            education: education,
            volunteer: volunteer,
            references: references
        }
        return infoToSend
    } 

    const handleSubmit = async () => {
        const info =  await objBuilder()
        console.log(info)
        
    }
  
    const [name, setName] = useState()
    const [bio, setBio] = useState()
    const [workHistory, setWorkHistory] = useState()
    const [skills, setSkills] = useState()
    const [accomplishments, setAccomplishments] = useState()
    const [education, setEducation] = useState()
    const [volunteer, setVolunteer] = useState()
    const [references, setReferences] = useState()

    const arrToMap = [['What is your full name?','Name...', setName], ['Tell us about yourself:','About you...', setBio], ['What is your work history:','Work History...',setWorkHistory], ['List any skills you may have:','Skills...',setSkills],['Tell us about your accomplishments:','Accomplishments...',setAccomplishments],['What is your level of education:','Education...',setEducation],['Have you done any volunteering:','Volunteer...',setVolunteer], ['Lastly, list a few references:','References...', setReferences]]
    
    return (
        <div>
            <h1>Please fill out the information below:</h1>
            <div className={styles.formContainer}>
            <ul className={styles.mainList}>
                {arrToMap.map((input, index) => (
                    <ListItem key={index} value={input[0]} placeholder={input[1]} handler={handleStateChange} param={input[2]} />
                ))}
            </ul>
            <button onClick={() => handleSubmit()} className={styles.submitBtn}>Submit</button>
            </div>
        </div>
    );
}

export default QuestionForm;