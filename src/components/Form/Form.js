import React from "react";
import Header from "./Header";
import MainProfile from "./MainProfile";
import Education from "./Education";
import Experience from "./Experience";
import FloatingButton from "../Generics/FloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../../styles/Form.css";

class Form extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        const { 
            previewSwitcher, 
            profileChange,
            addEducation, 
            addExperience, 
            deleteEducation,
            deleteExperience,
            changeEducation,
            changeExperience,
        } = this.props;
        const { profile, professions, educations } = this.props.data;

        return (
            <div className="form-page">
                <Header/>
                <div className="form-wrapper">
                    <MainProfile 
                    profile={profile}
                    profileChange={profileChange}/>
                    <Education
                    educations={educations}
                    addEducation={addEducation}
                    deleteEducation={deleteEducation}
                    changeEducation={changeEducation}/>
                    <Experience 
                    professions={professions}
                    addExperience={addExperience}
                    deleteExperience={deleteExperience}
                    changeExperience={changeExperience}/>
                    <FloatingButton previewSwitcher={previewSwitcher}>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xl"/>
                    </FloatingButton>
                </div>
            </div>
        );
    }
}

export default Form;
