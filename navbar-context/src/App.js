import './App.css';
import React, {useState} from 'react';
import UserContext from './contexts/UserContext';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrapper';

function App() {

    const [name, setName] = useState('Bob');

    return (
        <div className="App bg-light">
            <UserContext.Provider value={{name,setName}} >
                <Wrapper>    
                    <Navbar/>
                    <FormWrapper/>
                </Wrapper>
            </UserContext.Provider>
        </div>
    );
}

export default App;