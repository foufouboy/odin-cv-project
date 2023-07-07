import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div className="form__header">
                <h1 className="title">CV Maker</h1>
            </div>
        );
    }
}

export default Header;
