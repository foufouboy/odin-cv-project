import React from "react";
import CVEntry from "../Generics/CVEntry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Manon from "../../assets/images/sample-profile.png";

class InnerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page" ref={this.documentRef}>
                <div className="page__profile">
                    <img className="profile__image" src={Manon} alt="profile-image" />
                    <div className="profile__infos">
                        <h1 className="profile__name">
                            John Doe 
                        </h1>
                        <p className="profile__mail">
                        <FontAwesomeIcon icon="fa-solid fa-envelope"/>
                        <span>johndoe@gmail.com</span>
                        </p>
                        <p className="profile__phone">
                        <FontAwesomeIcon icon="fa-solid fa-phone"/>
                        <span>000 000 0000</span>
                        
                        </p>
                        <p className="profile__home">
                        <FontAwesomeIcon icon="fa-solid fa-home"/>
                            <span>
                                51th zone
                            </span>
                        </p>
                    </div>
                </div>
                <div className="page__content">
                    <div className="content__subsection">
                        <div className="content__subsection__title">
                            Formation
                        </div>
                        <CVEntry/>
                        <CVEntry/>
                    </div>
                    <div className="content__subsection">
                        <div className="content__subsection__title">
                            Professionnal 
                        </div>
                        <CVEntry/>
                        <CVEntry/>
                    </div>
                </div>
            </div>
        );
    }
}

export default InnerPage;
