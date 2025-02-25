import React, { useState } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";

export default function TextEditor() {
  const [text, setText] = useState<string>("");

  return (
    <div className="card m-5">
      <Editor
        value={text}
        onTextChange={(e: EditorTextChangeEvent) => setText(e.textValue)}
        style={{ height: "320px" }}
      />
    </div>
  );
}
