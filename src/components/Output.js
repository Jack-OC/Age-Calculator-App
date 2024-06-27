import React from "react";

function Output({ date }) {

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth() + 1;
  var currentDay = new Date().getDate();


  if (currentMonth > date.month || (currentMonth === date.month && currentDay >= date.day)) {
    var years = currentYear - date.year;
  } else {
    var years = currentYear - date.year - 1;
  }

  if (currentDay >= date.day) {
    var months = currentMonth - date.month;
  } else if (currentDay < date.day) {
    var months = currentMonth - date.month - 1;
  }

  months = months < 0 ? months + 12 : months;

  if (currentDay >= date.day) {
    var days = currentDay - date.day;
  } else {
    var days = currentDay - date.day + daysInMonth[date.month - 1];
  }

  return (
    <div className="age-output">
      <div className="output">
        <span className="number" id="year-output">{years || '--'}</span> years
      </div>
      <div className="output">
        <span className="number" id="month-output">{months || '--'}</span> months
      </div>
      <div className="output">
        <span className="number" id="day-output">{days || '--'}</span> days
      </div>
    </div>
  );
};

export default Output;