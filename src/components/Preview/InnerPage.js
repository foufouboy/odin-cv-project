import React from "react";
import CVEntry from "../Generics/CVEntry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sample from "./../../assets/images/sample-profile.png"

class InnerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        const { profile, professions, educations } = data;

        return (
            <div className="page" ref={this.documentRef}>
                <div className="page__profile">
                    <img className="profile__image" src={profile.photo || Sample} alt="profile-image"/>
                    <div className="profile__infos">
                        <h1 className="profile__name">
                            {profile.name} {profile.surname} 
                        </h1>
                        <p className="profile__mail">
                        <FontAwesomeIcon icon="fa-solid fa-envelope"/>
                        <span>{profile.email}</span>
                        </p>
                        <p className="profile__phone">
                        <FontAwesomeIcon icon="fa-solid fa-phone"/>
                        <span>{profile.phoneNumber}</span>
                        
                        </p>
                        <p className="profile__home">
                        <FontAwesomeIcon icon="fa-solid fa-home"/>
                            <span>
                                {profile.adress}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="page__content">
                    <div className="content__subsection">
                        <div className="content__subsection__title">
                            Formation
                        </div>
                        {educations.map(d => <CVEntry data={d} key={d.id}/>)}
                    </div>
                    <div className="content__subsection">
                        <div className="content__subsection__title">
                            Employment
                        </div>
                        {professions.map(d => <CVEntry data={d} key={d.id}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default InnerPage;
