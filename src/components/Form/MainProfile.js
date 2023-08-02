import React from "react";
import CollapsibleSection from "./../Generics/CollapsibleSection"
import FormInput from "../Generics/FormInput";

class MainProfile extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div className="form-profile-wrapper">
                <CollapsibleSection active={false} name="Profile">
                    <div className="form-profile__first-section">
                        <FormInput id="photo" label="Photo" type="file" classesToAdd="photo-input"/>
                        <div className="form-profile__name-email">
                            <div className="form-profile__names">
                                <FormInput id="name" label="Name"/>
                                <FormInput id="surname" label="Surname"/>
                            </div>
                            <FormInput id="email" label="E-mail"/>
                        </div>
                    </div>
                    <FormInput id="phone-number" label="Phone number" type="text"/>
                    <FormInput id="adress" label="Adress" type="text"/>
                    <FormInput id="postal-code" label="Postal code" type="text"/>
                    <FormInput id="city" label="City" type="text"/>
                </CollapsibleSection>
            </div>
        );
    }
}

export default MainProfile;
