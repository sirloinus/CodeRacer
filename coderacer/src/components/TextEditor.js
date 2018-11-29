import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class TextEditor extends React.Component {

    render() {
        const { row, newValue, onChange } = this.props
        return (
            <div className="snippet_wrapper">
                <AceEditor
                    value={newValue}
                    height={row * 16}
                    mode="javascript"
                    width="100%"
                    theme="monokai"
                    onChange={onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                />
            </div>

        )
    }

}

export default TextEditor