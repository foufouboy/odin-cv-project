import React from "react";

class CVEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cv-entry">
                <div className="entry__name-and-date">
                    <p className="name">The Odin Project but this time really long</p>
                    <p className="time">from Sept. 2022 to this day</p>
                </div>
                <p className="entry__location">The Odin Project, Auray, Massachussets, Pennsylvania</p>
                <p className="entry__description">C'est super pour l'instant
                </p>
            </div>
        );
    }
}

export default CVEntry;
