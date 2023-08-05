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
        const { active, previewSwitcher, data } = this.props;

        return (
            <div className={"preview-wrapper " + (active ? "" : "unactive")}>
                <Header 
                    docRef={this.docRef}
                    previewSwitcher={previewSwitcher}
                />
                <Page 
                    docRef={this.docRef}
                    data={data}
                />
            </div>
        );
    }
}

export default Preview;
