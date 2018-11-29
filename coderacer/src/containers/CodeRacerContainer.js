import React from 'react'
import CodeSnippet from '../components/CodeSnippet';
import TextEditor from '../components/TextEditor';
import ProgressBar from '../components/ProgressBar';

class CodeRacerContainer extends React.Component {

    state = {
        code: "for (var i = 0; i <= 100; i++) {\n  if (i % 2 === 0) {\n    console.log(i);\n  }\n}",
        row: 1,
        newValue: '',
        textPosition: 0,
        progressPercent: 67,
    }

    compareCode = (newValue) => {
        const position = this.state.textPosition
        if (newValue === this.state.code) {
            console.log('YOUVE WON')
        }  
        if (this.state.code[position] === newValue[position]) {
            // this.state.code.includes(this.state.newValue, position)) 
            console.log("wooo")
            const newPosition = position + 1
            this.setState({ textPosition: newPosition})
        } else {
            console.log('Wrong')
        }
    }

    handleTextChange = (newValue, event) => {
        this.compareCode(newValue)
        console.log(event)
        if (event.action === "insert") {
            this.setState({
                row: event.end.row + 2,
                newValue
            })
        } else {
            const position = this.state.textPosition
            const newPosition = position - 1
            this.setState({
                textPosition: newPosition,
                newValue
            })
        }
 
    }

    // TODO: call this function everytime a user types correctly to show their progress in the bar
    incrementPercent = () =>
        this.setState({
            percent: this.state.percent >= 100 ? 0 : this.state.percent + 1,
        })

    
    render() {
        const { code, row, newValue, progressPercent } = this.state
        const { handleTextChange } = this
        return (
            <div>
                <CodeSnippet code={code} />
                <TextEditor row={row} newValue={newValue} handleTextChange={handleTextChange}/>
                <ProgressBar progressPercent={progressPercent}/>
            </div>
        )
    }

}

export default CodeRacerContainer;