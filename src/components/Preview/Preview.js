import React from "react";
import Header from "./Header";
import Page from "./Page";
import "../../styles/Preview.css";

class Preview extends React.Component {
    constructor(props) {
        super(props);    
        this.docRef = React.createRef()
    }

    render() {
        return (
            <div className="preview-wrapper">
                <Header 
                    docRef={this.docRef}
                />
                <Page 
                    docRef={this.docRef}
                />
            </div>
        );
    }
}

export default Preview;
