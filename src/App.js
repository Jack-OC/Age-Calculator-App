import './App.css';
import React, { useState } from "react";
import Form from './components/Form';
import Output from './components/Output';


function App() {

  const [date, setDate] = useState('');
  
  return (
    <div className="age-calculator-card">
      
      <Form setDate={setDate} s/>
      <Output date={date} />
       
    </div>
  );



}

export default App;
