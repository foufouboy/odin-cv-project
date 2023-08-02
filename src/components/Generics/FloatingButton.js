import React from "react";

class FloatingButton extends React.Component {
    constructor(props) {
        super(props);
        this.bottomButtonRef = React.createRef();
    }

    render() {
        let { children, classesToAdd, previewSwitcher } = this.props;

        return (
            <button className={"blue-button floating-button"} onClick={previewSwitcher}>
                { children ? children : "Nah"}
            </button>
        );
    }
}

export default FloatingButton;
