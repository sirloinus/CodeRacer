import React from 'react'
import CodeSnippet from '../components/CodeSnippet';
import TextEditor from '../components/TextEditor';
import ProgressBar from '../components/ProgressBar';

class CodeRacerContainer extends React.Component {
    
    render() {
        return (
            <div>
                <CodeSnippet />
                <TextEditor />
                <ProgressBar/>
            </div>
        )
    }

}

export default CodeRacerContainer;