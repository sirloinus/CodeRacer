import React from 'react';
import { render } from 'react-dom';

import './App.css';
import { Button } from 'semantic-ui-react';
import CodeRacerContainer from './containers/CodeRacerContainer';
import NavBar from './components/NavBar';

class App extends React.Component {
  
  render(){
    return(
      <div>
        <NavBar/>
        <CodeRacerContainer/>
      </div>
    )
  }
}

export default App;
