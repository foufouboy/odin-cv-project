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
                accept={type === "file" ? ".jpg,.png,.jpeg,.gif,.webp" : undefined}
                className={classesToAdd} 
                onChange={e => {changeHandler(e, entryId);}}/>
            </div>
        );
    }
}

export default FormInput;
