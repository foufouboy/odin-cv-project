import React from "react";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { id, label, type, classesToAdd, value, changeHandler } = this.props;

        return (
            <div className="form-input-container">
                <label htmlFor={id}>{label}</label>
                <input 
                id={id} 
                type={type || "text"} 
                className={classesToAdd} 
                onChange={changeHandler || null}/>
            </div>
        );
    }
}

export default FormInput;
