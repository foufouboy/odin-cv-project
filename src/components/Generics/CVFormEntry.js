import React from "react";
import FormInput from "./FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CVFormEntry extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { data, deleteEntry, changeEntry, openEntry, category } = this.props; 
        let open = data.open;

        return (
            <div className="form-entry-element">
                {open ? (
                    <EntryForm
                    category={category}
                    openEntry={openEntry}
                    data={data}
                    deleteEntry={deleteEntry}
                    changeEntry={changeEntry}
                    />

                ) : (
                    <EntryResume 
                    category={category}
                    openEntry={openEntry}
                    title={data.title}
                    place={data.place} 
                    id={data.id}
                    employer={data.establishment}/>
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

        const {title, place, employer, openEntry, category, id} = this.props;

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
                <button className="white-button" onClick={() => {openEntry(category, id, true)}}>
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
        const { openEntry, category, data, changeEntry, deleteEntry } = this.props;

        return (
            <div className="entry-form__container">
                <FormInput id="title" label="Title" classesToAdd="title" 
                changeHandler={changeEntry} value={data.title} entryId={data.id}/>
                <div className="employer-city">
                    <FormInput id="establishment" label="Establishment" classesToAdd="establishment"
                    changeHandler={changeEntry} value={data.establishment} entryId={data.id}/>
                    <FormInput id="place" label="Place" classesToAdd="place"
                    changeHandler={changeEntry} value={data.place} entryId={data.id}/>
                </div>
                <div className="dates">
                    <FormInput id="startDate" label="Start date" classesToAdd="start-date" type="date"
                    changeHandler={changeEntry} value={data.startDate} entryId={data.id}/>
                    <FormInput id="endDate" label="End date" classesToAdd="end-date" type="date"
                    changeHandler={changeEntry} value={data.endDate} entryId={data.id}/>
                </div>
                <div className="textarea-container">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" cols="30" rows="10"
                    onChange={e => {changeEntry(e, data.id)}} value={data.description}>
                    </textarea>
                </div>
                <div className="end-buttons">
                    <button className="white-button" onClick={() => {deleteEntry(data.id)}}>
                        <FontAwesomeIcon icon="fa-trash-can" size="lg"/>
                    </button>
                    <button className="blue-button" onClick={() => {openEntry(category, data.id, false)}}>
                        <FontAwesomeIcon icon="fa-check" size="lg"/>
                        <span>Terminé</span>
                    </button>
                </div>
            </div>
        );
    }
} 

export default CVFormEntry;
