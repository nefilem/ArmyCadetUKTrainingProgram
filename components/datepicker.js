import DatePicker from "react-datepicker";
import moment from "moment";
import React, {useState} from "react";

import "react-datepicker/dist/react-datepicker.css";

function DateSelect (){

    const [startDate, setstartDate] = useState(null);
  const [endDate, setendDate] = useState(null);

  const handlestartDate = (date) => {
    setstartDate(date);
    setendDate(null);
  };

  const handleEndDate = (date) => {
    setendDate(date);
  };<div className="App">
  <div className="input-container">
    <div>
      <label>Course start Date</label>
      <DatePicker
        selected={startDate}
        minDate={new Date()}
        onChange={handlestartDate}
      />
    </div>
    <div>
      <label>Course end Date</label>
      <DatePicker
        selected={endDate}
        minDate={startDate}
        onChange={handleEndDate}
      />
    </div>
  </div>
  {startDate && endDate && (
    <div className="summary">
      <p>
        You have selected course from {moment(startDate).format("LL")} to{" "}
        {moment(endDate).format("LL")}.
      </p>
    </div>
  )}
</div>
}

export default DateSelect