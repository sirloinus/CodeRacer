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
        progressPercent: 0,
        percentageIncrement: 0,
        codeLength: 0
    }

    compareCode = (newValue) => {
        const position = this.state.textPosition
        if (newValue === this.state.code) {
            console.log('YOUVE WON')
        }  
        if (this.state.code[position] === newValue[position]) {
            console.log("wooo")
            const newPosition = position + 1
            this.setState({ textPosition: newPosition})
            this.incrementPercent()
        } 
    }

    componentDidMount() {
        this.calculateCodeLength()
    }

    calculateCodeLength = () => {
        const codeLength = this.state.code.length
        const percentageIncrement = 100 / codeLength
        this.setState({ codeLength, percentageIncrement})
    }

    handleTextChange = (newValue, event) => {
        this.compareCode(newValue)
        //console.log(event)
        if (event.action === "insert") {
            this.setState({
                row: event.end.row + 2,
                newValue
            })
        } 
        if (event.action === 'remove') {
            this.decreasePercent()
            const position = this.state.textPosition
            const newPosition = position - 1
            this.setState({
                textPosition: newPosition,
                newValue
            })
        }
 
    }

    // TODO: REFACTOR increment and decrease to one function
    incrementPercent = () => {
        this.setState({
            progressPercent: this.state.progressPercent >= 100 ? 0 : this.state.progressPercent + this.state.percentageIncrement,
        })
    }

    decreasePercent = () => {
        this.setState({
            progressPercent: this.state.progressPercent >= 100 ? 0 : this.state.progressPercent - this.state.percentageIncrement,
        })    
    }

    
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