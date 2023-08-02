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
        const { previewSwitcher } = this.props;

        return (
            <div className="form-page">
                <Header/>
                <div className="form-wrapper">
                    <MainProfile/>
                    <Education/>
                    <Experience/>
                    <FloatingButton previewSwitcher={previewSwitcher}>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xl"/>
                    </FloatingButton>
                </div>
            </div>
        );
    }
}

export default Form;
