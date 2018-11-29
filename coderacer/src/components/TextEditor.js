import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class TextEditor extends React.Component {

    state = {
        row: 1,
        newValue: ''
    }

    onChange = (newValue, event) => {
        console.log(event)
        this.setState({
            row: event.end.row + 1,
            newValue
        })
    }

    render() {
        console.log(this.state.row)
        return (
            <div className="snippet_wrapper">
                <AceEditor
                    value={this.state.newValue}
                    height={this.state.row * 16}
                    mode="javascript"
                    width="100%"
                    theme="monokai"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}

                />
            </div>

        )
    }

}

export default TextEditor