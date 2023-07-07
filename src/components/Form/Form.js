import React from "react";
import Header from "./Header";
import MainProfile from "./MainProfile";
import Education from "./Education";
import "./../../styles/Form.css";

class Form extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <div className="form-page">
                <Header/>
                <div className="form-wrapper">
                    <MainProfile/>
                    <Education/>
                </div>
            </div>
        );
    }
}

export default Form;
