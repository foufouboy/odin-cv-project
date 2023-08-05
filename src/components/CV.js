import React from "react";
import Preview from "./Preview/Preview";
import Form from "./Form/Form";
import exampleCV from "./Generics/exampleCV";
import emptyCV from "./Generics/emptyCV";
import { v4 as uuidv4 } from "uuid";

class CV extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            isPreviewActive: false,
            data: exampleCV, 
        }

        this.previewSwitcher = this.previewSwitcher.bind(this);
        this.profileChange = this.profileChange.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.changeEducation = this.changeEducation.bind(this);
        this.changeExperience = this.changeExperience.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.openEntry = this.openEntry.bind(this);
    }

    previewSwitcher() {
        this.setState(prevState => ({
            ...prevState, 
            isPreviewActive: !prevState.isPreviewActive,
        }));

    }

    /* PROFILE */

    profileChange(e) {
        const { name, value, type } = e.target;

        if (type === "file") {
            this.fileChange(e);
        }

        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                profile: {
                    ...prevState.data.profile,
                    [name]: value,
                }
            }
        }));

        console.log(this.state.data.profile);
    }

    fileChange(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        
        reader.onload = () => {
            this.setState(prevState => ({
                ...prevState,
                data: {
                    ...prevState.data,
                    profile: {
                        ...prevState.data.profile,
                        photo: reader.result,
                    
                    }
                },
            }));
            e.target.style.background = `url("${reader.result}")`;
            e.target.style.backgroundSize = "cover";
            e.target.style.backgroundPosition = "center";
            e.target.style.zIndex = 5;
            e.target.style.border = "1px solid var(--almost-blue-hover)";
        }

        reader.readAsDataURL(file);
    }


    /* EDUCATIONS && EXPERIENCES */

    addEducation() {
        const newId = uuidv4();

        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                educations: [
                    ...prevState.data.educations,
                    {
                        id: newId,
                        title: "",
                        establishment: "",
                        place: "",
                        startDate: "",
                        endDate: "",
                        description: "",
                        open: false,
                    },
                ],
            }, 
        }));

        this.openEntry("educations", newId, true);
    }

    deleteEducation(id) {
        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                educations: prevState.data.educations.filter(e => e.id !== id),
            }
        }));

    }

    changeEducation(e, id) {
        const { name, value } = e.target;

        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                educations: prevState.data.educations.map(e => {
                    if (e.id === id) {
                        return { ...e, [name]: value };
                    } else {
                        return e;
                    }
                })
            }
        }));
    }

    openEntry(category, id, value) {
        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                [category]: prevState.data[category].map(e => {
                    if (e.id === id) {
                        return {...e, open: value};
                    } else {
                        if (value === true) {
                            return {...e, open: false};
                        } else {
                            return e;
                        }
                    }
                }),
            }
        }))
    }

    addExperience() {
        const newId = uuidv4();

        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                professions: [
                    ...prevState.data.professions,
                    {
                        id: newId,
                        title: "",
                        establishment: "",
                        place: "",
                        startDate: "",
                        endDate: "",
                        description: "",
                        open: false,
                    },
                ],
            }, 
        }));

        this.openEntry("professions", newId, true);
    }

    deleteExperience(id) {
        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                professions: prevState.data.professions.filter(e => e.id !== id),
            }
        }))
    }

    changeExperience(e, id) {
        const { name, value } = e.target;

        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                professions: prevState.data.professions.map(e => {
                    if (e.id === id) {
                        return { ...e, [name]: value };
                    } else {
                        return e;
                    }
                }),
            }
        }));
    }

    render() {
        const { isPreviewActive, data } = this.state;

        return (
            <>
                <Preview 
                active={isPreviewActive} 
                previewSwitcher={this.previewSwitcher}
                data={data}/>
                <Form 
                previewSwitcher={this.previewSwitcher}
                data={data}
                profileChange={this.profileChange}
                addExperience={this.addExperience}
                addEducation={this.addEducation}
                deleteEducation={this.deleteEducation}
                deleteExperience={this.deleteExperience}
                changeEducation={this.changeEducation}
                changeExperience={this.changeExperience}
                openEntry={this.openEntry}
                />
            </>
        );
    }
}

export default CV;
