import React from 'react'
import CodeSnippet from '../components/CodeSnippet';
import TextEditor from '../components/TextEditor';
import ProgressBar from '../components/ProgressBar';

class CodeRacerContainer extends React.Component {

    state = {
        code: "for (var i = 0; i <= 100; i++) {\n  if (i % 2 === 0) {\n    console.log(i);\n  }\n}",
        row: 1,
        newValue: '',
    }

    onChange = (newValue, event) => {
        console.log(event)
        this.setState({
            row: event.end.row + 1,
            newValue
        })
    }
    
    render() {
        const { code, row, newValue } = this.state
        const { onChange } = this
        return (
            <div>
                <CodeSnippet code={code} />
                <TextEditor row={row} newValue={newValue} onChange={onChange}/>
                <ProgressBar/>
            </div>
        )
    }

}

export default CodeRacerContainer;