import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
 
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import './App.css';
import { Button } from 'semantic-ui-react';

class App extends React.Component {

  onChange = (newValue) => {
    console.log(newValue);
  }

  

  render(){
    return(
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
      />
    )
  }
}

export default App;
