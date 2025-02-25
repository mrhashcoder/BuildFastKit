import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "@/config/code";

export default function Snippet() {
  return (
    <div className="container mx-auto p-4">
      <div className=" Fira Code">
        <CopyBlock
          language={"jsx"}
          text={sample["jsx"]}
          showLineNumbers={true}
          theme={dracula}
          codeBlock
        />
      </div>
    </div>
  );
}
