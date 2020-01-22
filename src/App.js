import React from 'react';
import './App.css';
import AddButton from './uiElements/buttons/AddButton'
import ProjectFormContainer from './project/ProjectFormContainer';

function App() {
  return (
    <div className="App">
      <AddButton Form={ProjectFormContainer}/>
    </div>
  );
}

export default App;
