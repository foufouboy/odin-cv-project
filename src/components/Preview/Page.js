import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Manon from "../../assets/images/sample-profile.png";

class Page extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
                <div className="page-wrapper">
                    <div className="page__outer">
                        <div className="page">
                            <div className="page__profile">
                                <img className="profile__image" src={Manon} alt="profile-image" />
                                <div className="profile__infos">
                                    <h1 className="profile__name">
                                        Issa Clement
                                    </h1>
                                    <p className="profile__mail">
                                    <FontAwesomeIcon icon="fa-solid fa-download"/>
                                    cissaclement@gmail.com 
                                    </p>
                                    <p className="profile__phone">
                                    <FontAwesomeIcon icon="fa-solid fa-download"/>
                                    0782775614
                                    </p>
                                    <p className="profile__home">
                                    <FontAwesomeIcon icon="fa-solid fa-download"/>
                                    44 lotissement de Kerberluet Brech
                                    </p>
                                </div>
                            </div>
                            <div className="page__content">
                            </div>
                        </div>
                    </div>
                    <button className="blue-button page__download-button">
                        <FontAwesomeIcon icon="fa-solid fa-download"/>
                        <span>Download</span>
                    </button>
                </div>
        );
    }
}

export default Page;
