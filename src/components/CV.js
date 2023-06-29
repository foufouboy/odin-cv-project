import React from "react";
import Preview from "./Preview/Preview";
import Form from "./Form/Form";

class CV extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <>
                <Preview/>
                <Form/>
            </>
        );
    }
}

export default CV;
