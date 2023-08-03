import React from "react";
import CollapsibleSection from "./../Generics/CollapsibleSection";
import CVFormEntry from "../Generics/CVFormEntry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Experience extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        const { professions, addExperience, deleteExperience, changeExperience, openEntry } = this.props;

        return (
            <div className="form-experience-wrapper">
                <CollapsibleSection name="Experience" active={false}>
                    {professions.map(d => {
                        return (
                            <CVFormEntry
                            key={d.id}
                            data={d}
                            deleteEntry={deleteExperience}
                            changeEntry={changeExperience}
                            openEntry={openEntry}
                            category="professions"
                            />

                        );
                    })}
                    <button className="white-button add-entry" onClick={() => {
                            addExperience();
                        }}>
                        <FontAwesomeIcon icon="fa-solid fa-plus"/>
                        <span>Add a professional experience</span>
                    </button>
                </CollapsibleSection>
            </div>
        );
    }
}

export default Experience;
