import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const SelectDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleStartDate = (date) => {
        setStartDate(date);}
    return (
        <>
      <DatePicker 
        selected={startDate} 
        onChange={handleStartDate} 

      />
      <p>
            Your course start date {moment(startDate).format("LL")}</p>
            </>
    );
  };
  
  export default SelectDate;