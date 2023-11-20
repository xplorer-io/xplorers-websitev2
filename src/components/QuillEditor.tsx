"use client";
import React, {
  CSSProperties,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

type EditorProps = {
  children?: ReactNode;
  content: any;
  setContent: Dispatch<SetStateAction<any>>;
  readOnly?: Boolean;
} & CSSProperties;

const QuillEditor = ({
  children,
  content,
  setContent,
  readOnly,
  ...props
}: EditorProps) => {
  const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ];
  const [editor, setEditor] = useState<Quill | null>(null);

  const editorRef = useCallback(
    (ref: HTMLDivElement) => {
      if (ref === null) return;
      ref.innerHTML = "";

      const container = document.createElement("div");
      ref.append(container);

      const q = new Quill("#editor", {
        theme: "snow",
        modules: {},
        placeholder: "Start writing...",
      });

      setEditor(q);
    },
    [setEditor]
  );

  // update changes in the editor
  if (editor) {
    editor.on("text-change", function () {
      return setContent(editor.getContents().ops);
    });
  }

  return (
    <>
      <div id="editor" ref={editorRef} {...props}>
        {children}
      </div>
    </>
  );
};
export default QuillEditor;
