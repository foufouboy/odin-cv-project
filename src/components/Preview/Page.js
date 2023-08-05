import React from "react";
import InnerPage from "./InnerPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "../Generics/DownloadButton";

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let { docRef, data } = this.props;

        return (
                <div className="page-wrapper">
                    <div className="page__outer">
                        <InnerPage 
                        ref={docRef}
                        data={data}/>
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
                        docRef={() => docRef.current}
                    />
                </div>
        );
    }
}

export default React.forwardRef((props, ref) => <Page docRef={ref} {...props}/>);
