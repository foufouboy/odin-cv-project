import React from "react";
import FormInput from "./FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CVFormEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }

        this.stateSwitch = this.stateSwitch.bind(this);
    }

    stateSwitch() {
        this.setState((prevState) => ({open: !prevState.open}))
    }

    render() {
        let { open } = this.state;
        const { data, deleteEntry, changeEntry } = this.props; 

        return (
            <div className="form-entry-element">
                {open ? (
                    <EntryForm
                    stateSwitch={this.stateSwitch}
                    data={data}
                    deleteEntry={deleteEntry}
                    changeEntry={changeEntry}
                    />

                ) : (
                    <EntryResume 
                    title={data.title}
                    place={data.place} 
                    employer={data.establishment}
                    stateSwitch={this.stateSwitch}/>
                )}
            </div>
        );
    }
}

class EntryResume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {title, place, employer, stateSwitch} = this.props;

        return (
            <div className="entry-resume">
                <div className="infos">
                    <p className="title">{title || "[New entry]"}</p>
                    <p className="place">
                        {
                            employer && place ?
                                `${employer}, ${place}` :
                                employer ? employer :
                                place ? place :
                                ""
                        }
                    </p>
                </div>
                <button className="white-button" onClick={stateSwitch}>
                    <FontAwesomeIcon icon="fa-solid fa-pen-nib" size="lg">
                    </FontAwesomeIcon>
                </button>
            </div>
        );
    }
}

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { stateSwitch, data, changeEntry, deleteEntry } = this.props;

        return (
            <div className="entry-form__container">
                <FormInput id="title" label="Title" classesToAdd="title"/>
                <div className="employer-city">
                    <FormInput id="establishment" label="Establishment" classesToAdd="establishment"/>
                    <FormInput id="place" label="Place" classesToAdd="place"/>
                </div>
                <div className="dates">
                    <FormInput id="startDate" label="Start date" classesToAdd="start-date" type="date"/>
                    <FormInput id="endDate" label="End date" classesToAdd="end-date" type="date"/>
                </div>
                <div className="textarea-container">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" cols="30" rows="10"></textarea>
                </div>
                <div className="end-buttons">
                    <button className="white-button" onClick={() => {deleteEntry(data.id)}}>
                        <FontAwesomeIcon icon="fa-trash-can" size="lg"/>
                    </button>
                    <button className="blue-button" onClick={stateSwitch}>
                        <FontAwesomeIcon icon="fa-check" size="lg"/>
                        <span>Terminé</span>
                    </button>
                </div>
            </div>
        );
    }
} 

export default CVFormEntry;
