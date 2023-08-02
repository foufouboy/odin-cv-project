import React from "react";
import Preview from "./Preview/Preview";
import Form from "./Form/Form";

class CV extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            isPreviewActive: false,
        }

        this.previewSwitcher = this.previewSwitcher.bind(this);
    }

    previewSwitcher() {
        this.setState(prevState => ({
            ...prevState, 
            isPreviewActive: !prevState.isPreviewActive,
        }));
    }

    render() {
        const { isPreviewActive } = this.state;
        return (
            <>
                <Preview active={isPreviewActive} previewSwitcher={this.previewSwitcher}/>
                <Form previewSwitcher={this.previewSwitcher}/>
            </>
        );
    }
}

export default CV;
