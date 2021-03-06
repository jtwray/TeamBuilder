
import React, { useState } from 'react';
import { Form } from "./components/Form"
import { AllTeamMates } from "./components/AllTeamMates"


function App() {
  const initialState = [
    { name: " ", email: " ", role: " " },
  ]
  const [teammates, setTeamMates] = useState(initialState);
  return (
    <div className="App" >
      <header className="App-header" >
        <Form teammates={teammates} setTeamMates={setTeamMates} />
        <AllTeamMates teammates={teammates} />

      </header>
    </div>
  );
}


export default App;

