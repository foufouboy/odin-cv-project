import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <div className="preview__header-wrapper">
                <button className="dark-button preview__return">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" size="lg"/>
                </button>
                <p>Preview</p>
                <button className="preview__download blue-button">
                    <FontAwesomeIcon icon="fa-solid fa-download" size="lg"/>
                </button>
            </div>
        );
    }
}

export default Header;
