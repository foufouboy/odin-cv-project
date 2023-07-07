import React from "react";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { id, label, type, classesToAdd } = this.props;

        return (
            <div className="form-input-container">
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type || "text"} className={classesToAdd}/>
            </div>
        );
    }
}

export default FormInput;
