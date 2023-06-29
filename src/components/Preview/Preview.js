import React from "react";
import Header from "./Header";
import Page from "./Page";
import "../../styles/Preview.css";

class Preview extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <div className="preview-wrapper">
                <Header/>
                <Page/>
            </div>
        );
    }
}

export default Preview;
