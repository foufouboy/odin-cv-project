import React from "react";
import DownloadButton from "../Generics/DownloadButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        const { docRef } = this.props;
        console.log(docRef);

        return (
            <div className="preview__header-wrapper">
                <button className="dark-button preview__return">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" size="lg"/>
                </button>
                <p>Preview</p>
                <DownloadButton
                    button={() => {
                        return (
                            <button className="preview__download blue-button">
                                <FontAwesomeIcon icon="fa-solid fa-download" size="lg"/>
                            </button>
                        );
                    }}
                    docRef={() => docRef}
                />
            </div>
        );
    }
}

export default Header;
