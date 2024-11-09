"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { useTheme } from "next-themes";

export default function CodeEditor() {
  const { theme } = useTheme();

  const vscodeTheme = theme === "light" ? vscodeLight : vscodeDark;

  return (
    <div className="container mx-auto p-4">
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        theme={vscodeTheme}
        extensions={[javascript({ jsx: true, typescript: true })]}
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
        }}
      />
    </div>
  );
}
