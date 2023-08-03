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
                    ...prevState.profile,
                    [name]: value,
                }
            }
        }));
    }

    fileChange(e) {
        return e; 
    }


    /* EDUCATIONS && EXPERIENCES */

    addEducation() {
        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                educations: [
                    ...prevState.data.educations,
                    {
                        id: uuidv4(),
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
    }

    deleteEducation(id) {
        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                educations: prevState.data.educations.filter(e => e.id !== id),
            }
        }));

        console.log(this.state.data);
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

    addExperience() {
        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                professions: [
                    ...prevState.data.professions,
                    {
                        id: uuidv4(),
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
                />
            </>
        );
    }
}

export default CV;
