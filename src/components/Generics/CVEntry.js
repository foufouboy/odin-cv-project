import React from "react";

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', { month: 'long' });
}

function formatedDate(date) {
    const formatedDate = date.split("-");
    return `${getMonthName(formatedDate[1])} ${formatedDate[0]}`;
}

class CVEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { data } = this.props;
        console.log(data);

        return (
            <div className="cv-entry">
                <div className="entry__name-and-date">
                    <p className="name">
                        {data.title}
                    </p>
                    <p className="time">
                        from {formatedDate(data.startDate)} <br/> to {formatedDate(data.endDate)}
                    </p>
                </div>
                <p className="entry__location">
                    {data.establishment}, {data.place}
                </p>
                <p className="entry__description">
                    {data.description}
                </p>
            </div>
        );
    }
}

export default CVEntry;
