import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class TextEditor extends React.Component {


    onChange = (newValue) => {
        console.log(newValue);
    }

    render() {
        return (
            <div>Text Editor
                <AceEditor
                    mode="javascript"
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