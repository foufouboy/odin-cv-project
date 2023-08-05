import React from "react";
import CollapsibleSection from "./../Generics/CollapsibleSection"
import FormInput from "../Generics/FormInput";

class MainProfile extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        const { profileChange, profile } = this.props;
        
        return (
            <div className="form-profile-wrapper">
                <CollapsibleSection active={false} name="Profile">
                    <div className="form-profile__first-section">
                        <FormInput id="photo" label="Photo" type="file" classesToAdd="photo-input"
                        changeHandler={profileChange}/>
                        <div className="form-profile__name-email">
                            <div className="form-profile__names">
                                <FormInput id="name" label="Name" 
                                changeHandler={profileChange} value={profile.name}/>
                                <FormInput id="surname" label="Surname" 
                                changeHandler={profileChange} value={profile.surname}/>
                            </div>
                            <FormInput id="email" label="E-mail" type="email"
                            changeHandler={profileChange} value={profile.email}/>
                        </div>
                    </div>
                    <FormInput id="phoneNumber" label="Phone number" type="text"
                    changeHandler={profileChange} value={profile.phoneNumber}/>
                    <FormInput id="adress" label="Adress" type="text"
                    changeHandler={profileChange} value={profile.adress}/>
                    <FormInput id="postalCode" label="Postal code" type="text"
                    changeHandler={profileChange} value={profile.postalCode}/>
                    <FormInput id="city" label="City" type="text"
                    changeHandler={profileChange} value={profile.city}/>
                </CollapsibleSection>
            </div>
        );
    }
}

export default MainProfile;
