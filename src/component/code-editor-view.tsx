import ReactCodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { useRef, useState } from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import React from "react";

export default function CodeEditorView() {
  /* Set up theme */
  const [theme, setTheme] = useState(vscodeDark);
  const cmRef = useRef<ReactCodeMirrorRef>(null);

  const [content, setContent] = useState<string>("");

  function onContentChange(value: string) {
    setContent(value);
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-content2">
      {
        <ReactCodeMirror
          ref={cmRef}
          value={content}
          onChange={onContentChange}
          theme={theme}
          height="100%"
          style={{
            height: "100%",
          }}
        />
      }
    </div>
  );
}
