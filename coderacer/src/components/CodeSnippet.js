import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';


const CodeSnippet = () => {



    const code = "for (var i = 0; i <= 100; i++) {\n  if (i % 2 === 0) {\n    console.log(i);\n  }\n}"
    console.log(code.match(/\n/g).length + 1)
        return (
            <div className="snippet_wrapper">
                <AceEditor
                    height={(code.match(/\n/g).length + 1) * 16}
                    width="100%"
                    value={code}
                    mode="javascript"
                    theme="monokai"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    readOnly='true'
                />
            </div>

        )

}

export default CodeSnippet