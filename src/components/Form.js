import React, { useState } from "react";
import arrow from '../assets/images/icon-arrow.svg';


function Form({ setDate }) {
  
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dayError, setDayError] = useState(false);
    const [monthError, setMonthError] = useState(false);
    const [yearError, setYearError] = useState(false);
    const [dayMessage, setDayMessage] = useState('');
    const [monthMessage, setMonthMessage] = useState('');
    const [yearMessage, setYearMessage] = useState('');
    
    const currentYear = new Date().getFullYear();
    
    const handleDayChange = (e) => {
      e.preventDefault();
      setDay(e.target.value);
      
      if(e.target.value.length){
        setDayMessage("");
        setDayError(false);
      }
    };
    
    const handleMonthChange = (e) => {
      e.preventDefault();
      setMonth(e.target.value);
      
       if(e.target.value.length){
        setMonthError(false);
      }
    };
  
    const handleYearChange = (e) => {
      e.preventDefault();
      setYear(e.target.value);
      
       if(e.target.values){
        setDayError(false);
      }
    };

   const daysInMonth = (m, y) => {
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
        return 31;
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
        return 30;
    } else {
        if ((y % 4 === 0) || (y % 400 === 0 && y % 100 !== 0)) {
            return 29;
        } else {
            return 28;
        }
    }
  };
   
    const handleFormSubmit = (e) => {
      e.preventDefault();
      
      if(year.length === 0 && month.length === 0 & day.length === 0){
        setYearMessage("This field is required");
        setMonthMessage("This field is required");
        setDayMessage("This field is required");
        setYearError(true);
        setMonthError(true);
        setDayError(true);
       
        return;
      }  
      if(year.length && month.length & day.length){
        setYearMessage("");
        setMonthMessage("");
        setDayMessage("");
        setYearError(false);
        setMonthError(false);
        setDayError(false);
      } 
      
      if(year < 1900){
        setYearMessage("Must be a valid year");
        setYearError(true);
      } else if(year > currentYear){
        setYearMessage("Must be in the past");
        setYearError(true);
      }
      
      if(month > 12 || month <= 0){
        setMonthMessage("Must be a valid month");
        setMonthError(true);
      }
      
     if(day > daysInMonth(month, year) || day <= 0){
       setDayMessage("Must be a valid day");
       setDayError(true);
     }
      
       const data = {
              day,
              month,
              year,
       };
       setDate(data);
    };
  
    
    return (
      <div className="form-div">
        <div className="form">
          <div className="field" id="day-field">
            <label for="day" className="label"  
              style={{ color: dayError ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)" }}>
              DAY</label>
            <input type="number" name="day" 
                  className="input" id="day-input" 
                  placeholder="DD" value={day}
                  style={{ borderColor: dayError ? "hsl(0, 100%, 67%)" : "hsl(0, 0%, 86%)" }}
                  onChange={handleDayChange}/>
            { dayError && <p className="error-msg">{dayMessage}</p> }
          </div>
          <div className="field" id="month-fieldset">
            <label for="month" className="label"
              style={{ color: monthError ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)" }}> 
              MONTH</label>
            <input type="number" name="month"
                   className="input" id="month-input" 
                   placeholder="MM" value={month}
                   style={{ borderColor: monthError ? "hsl(0, 100%, 67%)" : "hsl(0, 0%, 86%)" }}
                   onChange={handleMonthChange}/>
               { monthError && <p class="error-msg">{monthMessage}</p> }
          </div>
          <div className="field" id="year-fieldset">
            <label for="year" className="label"
              style={{ color: yearError ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)" }}>YEAR</label> 
            <input type="number" name="year"
                   className="input" id="year-input"
                   placeholder="YYYY" value={year}
                   style={{ borderColor: yearError ? "hsl(0, 100%, 67%)" : "hsl(0, 0%, 86%)" }}
                   onChange={handleYearChange}/>
            { yearError && <p className="error-msg">{yearMessage}</p> }
          </div>
         
        </div>
        
         <div className="button-div">
            <div className="line"></div>
            <button className="submit-btn" onClick={handleFormSubmit}>
            <img src={arrow} className="btn-img" alt='' />
            </button>
           <div className="line line-2"></div>
          </div>
        
      </div>
    );
  };

  export default Form;