import React from "react";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { id, label, type, classesToAdd, value, changeHandler, entryId } = this.props;

        return (
            <div className="form-input-container">
                <label htmlFor={id}>{label}</label>
                <input 
                id={id} 
                value={value}
                name={id}
                type={type || "text"} 
                className={classesToAdd} 
                onChange={e => {changeHandler(e, entryId)}}/>
            </div>
        );
    }
}

export default FormInput;
