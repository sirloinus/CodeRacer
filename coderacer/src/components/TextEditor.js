import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class TextEditor extends React.Component {

    render() {
        const { row, newValue, handleTextChange } = this.props
        const height = row * 16
        return (
            <div className="snippet_wrapper">
                <AceEditor
                    value={newValue}
                    height={height}
                    mode="javascript"
                    width="100%"
                    theme="monokai"
                    onChange={handleTextChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    tabSize={2}
                />
            </div>
        )
    }

}

export default TextEditor