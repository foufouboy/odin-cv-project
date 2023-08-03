import React from "react";
import ReactToPrint from "react-to-print";

class DownloadButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { button, docRef } = this.props;

        return (
            <ReactToPrint
                trigger={button} 
                content={docRef}
            />
        );
    }
}

export default DownloadButton;
