import React from "react";
import Header from "./Header";
import Page from "./Page";
import "../../styles/Preview.css";

class Preview extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            docRef: React.createRef(),
        }

        this.setDocRef = this.setDocRef.bind(this);
    }

    setDocRef(ref) {
        this.setState(prevState => {
            return {
                ...prevState,
                docRef: ref,
            }
        });
    }

    render() {
        return (
            <div className="preview-wrapper">
                <Header 
                    docRef={this.state.docRef}
                />
                <Page 
                    docRef={this.state.docRef}
                    setDocRef={this.setDocRef}  
                />
            </div>
        );
    }
}

export default Preview;
