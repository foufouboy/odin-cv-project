import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CollapsibleSection extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            active: this.props.active || false,
        }
        this.onTriggerClick = this.onTriggerClick.bind(this);
    }

    onTriggerClick() {
        this.setState(prevState => ({
            active: !prevState.active, 
        }))
        console.log(this.state.active);
    }

    render() {

        const { children } = this.props;
        const { active } = this.state;

        return (
                <div className="colps-element">
                    <div className="colps-section-wrapper">
                        <h3 className="colps-section__title">Profile</h3>
                        <button className="white-button colps-section__trigger" onClick={this.onTriggerClick}>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-down" rotation={active ? 180 : 0}size="lg"/>
                        </button>
                    </div>
                    {
                        active && 
                        <div className="colps-section__content">
                            {children}
                        </div> 
                    }
                </div>
        );
    }
}

export default CollapsibleSection;
