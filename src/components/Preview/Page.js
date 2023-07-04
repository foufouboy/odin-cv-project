import React from "react";
import InnerPage from "./InnerPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "../Generics/DownloadButton";

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let { docRef, setDocRef } = this.props;

        return (
                <div className="page-wrapper">
                    <div className="page__outer">
                        <InnerPage ref={e => {
                            return docRef = e;
                        }}/>
                    </div>
                    <DownloadButton
                        button={() => {
                            return (
                                <button className="blue-button page__download-button">
                                    <FontAwesomeIcon icon="fa-solid fa-download"/>
                                    <span>Download</span>
                                </button>
                            ); 
                        }}  
                        docRef={() => docRef}
                    />
                </div>
        );
    }
}

export default Page;
