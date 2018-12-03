import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
// import { Transition } from 'semantic-ui-react'


const CodeSnippet = ({ code }) => {

    const height = code => {
        const codeLines = (code.match(/\n/g)) ? code.match(/\n/g).length : 0;
        return (codeLines + 1) * 16
    }

    return (
        <div className="snippet_wrapper">
            <AceEditor
                height={height(code)}
                width="100%"
                value={code}
                mode="javascript"
                theme="monokai"
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                readOnly={true}
                fontSize='12px'
            />
        </div>
    )

}

export default CodeSnippet