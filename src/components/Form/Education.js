import React from "react";
import CollapsibleSection from "./../Generics/CollapsibleSection";
import CVFormEntry from "../Generics/CVFormEntry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

class Education extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        const { educations, addEducation, deleteEducation, changeEducation } = this.props;

        return (
            <div className="form-education-wrapper">
                <CollapsibleSection name="Education" active={true}>
                    {educations.map(d => {
                        return (
                            <CVFormEntry 
                            key={d.id}
                            data={d} 
                            deleteEntry={deleteEducation} 
                            changeEntry={changeEducation}/> 
                        );
                    })}
                    <button className="white-button add-entry" onClick={addEducation}>
                        <FontAwesomeIcon icon="fa-solid fa-plus"/>
                        <span>Add an education</span>
                    </button>
                </CollapsibleSection>
            </div>
        );
    }
}

export default Education;
