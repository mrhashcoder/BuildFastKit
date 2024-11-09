'use client'

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';


export default function CodeEditor() {

  return (
    <div className="container mx-auto p-4">
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        theme={vscodeDark}
        extensions={[javascript({ jsx: true, typescript: true })]}
        onChange={(value, viewUpdate) => {
          console.log('value:', value);
        }}
      />
    </div>
  );
  
};