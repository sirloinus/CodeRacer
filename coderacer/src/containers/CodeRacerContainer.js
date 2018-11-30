import React from 'react'
import CodeSnippet from '../components/CodeSnippet';
import TextEditor from '../components/TextEditor';
import ProgressBar from '../components/ProgressBar';

class CodeRacerContainer extends React.Component {

    state = {
        code: '',
        row: 1,
        newValue: '',
        textPosition: 0,
        progressWidth: 0,
        flag: true
    }

    getSnippets = () => {
        fetch('data.json')
            .then(resp => resp.json())
            .then(snippets => this.setState({
                // random num picked (no longer than length of array), 
                // code snippet of that index selected as the value of "code" state for game
                code: snippets.codeSnippets[Math.floor(Math.random() * (snippets.codeSnippets.length))].code
            })
        )
    }

    componentDidMount() {
        this.getSnippets()
    }

    compareCode = (event, newValue) => {
        const code = this.state.code;
        const newPosition = this.state.textPosition + 1

        if (code.replace(/ /g, '')[this.state.textPosition] !== newValue.replace(/ /g, '')[this.state.textPosition]) {
            this.setState({ row: event.end.row + 2, newValue, flag: false })
        } else {
            this.setState({
                row: event.end.row + 2,
                newValue,
                textPosition: newPosition,
                flag: true
            })
        }
    }

    handleTextChange = (newValue, event) => {
        console.log('newValue.slice(-1)', newValue.slice(-1))
        if (event.action === "insert") {
            this.compareCode(event, newValue)
        } else if (event.action === 'remove' && newValue.slice(-1) !== ' ') {
            const currentPosition = this.state.progressWidth
            
            if (currentPosition >= this.changeProgressBarHandler(newValue)) {
                
                this.setState({ newValue, progressWidth: this.changeProgressBarHandler(newValue), textPosition: this.state.textPosition - 1 })
            } else {
                this.setState({ newValue})
            }           
        }
        (this.state.flag) && this.setState({ progressWidth: this.changeProgressBarHandler(newValue)})
    }

    changeProgressBarHandler = (newValue) => {
        const codeLength = this.state.code.length
        const inputLength = newValue.length
        return  Math.ceil(inputLength / codeLength * 100)
    }

    render() {
        const { code, row, newValue, progressWidth } = this.state;
        const { handleTextChange } = this
        return (
            <div>
                <CodeSnippet code={code} />
                <TextEditor row={row} newValue={newValue} handleTextChange={handleTextChange} />
                <ProgressBar progressWidth={progressWidth} />
            </div>
        )
    }

}

export default CodeRacerContainer;