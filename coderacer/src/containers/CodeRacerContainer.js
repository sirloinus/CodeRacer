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
        // .then(() => this.calculateCodeLength())
    }

    compareCode = (newValue) => {

    }

    componentDidMount() {
        this.getSnippets()
    }

    dummyFunc = (event, newValue, actionBoolean) => {
        const code = this.state.code;
        const positionNum = (actionBoolean) ? 1 : -1;
        const rowNum = (actionBoolean) ? 2 : -2;

        if (code.replace(/ /g, '')[this.state.textPosition] !== newValue.replace(/ /g, '')[this.state.textPosition]) {
            this.setState({ row: event.end.row + rowNum, newValue, flag: false })
        } else {
            const newPosition = this.state.textPosition + positionNum;
            
            this.setState({
                row: event.end.row + rowNum,
                newValue,
                textPosition: newPosition,
                flag: true
            })
        }
    }

    handleTextChange = (newValue, event) => {
        if (event.action === "insert") {
            this.dummyFunc(event, newValue, true)
        }
        // } else if (event.action === 'remove') {
        //     this.setState({textPosition: this.state.textPosition - 1},
        //     () => {
        //         this.dummyFunc(event, newValue, false)
        //     })
           
        // }
        
        (this.state.flag) && this.changeProgressBarHandler(newValue)

    }

    changeProgressBarHandler = (newValue) => {
        const codeLength = this.state.code.length
        const inputLength = newValue.length
        const width = Math.ceil(inputLength / codeLength * 100)
        this.setState({ progressWidth: width })

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