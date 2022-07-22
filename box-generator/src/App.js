import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Boxes from './components/Boxes';

function App() {
  const [colorBox, setColorBox] = useState("");
  const [colorBoxes, setColorBoxes] = useState([]);

  const handleColorBox = ( newColorBox ) => {
    setColorBox( newColorBox );
    setColorBoxes([...colorBoxes, newColorBox])
  }

  return (
    <div className="App">
      <Form onNewBox={ handleColorBox } />
      <Boxes colorBox={ colorBox } colorBoxes={ colorBoxes } />
    </div>
  );
}

export default App;