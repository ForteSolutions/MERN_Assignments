import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import FormData from './components/FormData';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState}/>
      <FormData data={state}/>
    </div>
  );
}

export default App;