import React, { useEffect, useRef } from "react";
import ace from "ace-builds";

export function CodeEditor({code}) {
  const container = useRef(null);

  useEffect(() => {
    const editor = ace.edit(container.current);
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    return () => editor.destroy();
  }, []);

  return <div ref={container}>{code}</div>;
}

