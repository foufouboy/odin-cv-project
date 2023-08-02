import React from "react";
import CollapsibleSection from "./../Generics/CollapsibleSection";
import CVFormEntry from "../Generics/CVFormEntry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Education extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            entries: [],

        }
    }

    render() {
        const { entries } = this.state;

        return (
            <div className="form-education-wrapper">
                <CollapsibleSection name="Education" active={true}>
                    <CVFormEntry></CVFormEntry>
                    <button className="white-button add-entry">
                        <FontAwesomeIcon icon="fa-solid fa-plus"/>
                        <span>Add an education</span>
                    </button>
                </CollapsibleSection>
            </div>
        );
    }
}

export default Education;
