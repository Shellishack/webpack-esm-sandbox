"use client";

import { DrawnLine } from "../../lib/types";
import React from "react";
import Canvas from "./canvas";

export default function CanvasEditor({
  editorCanvas,
  onTextExtracted,
  isDownloadClip,
  isDrawHulls,
  theme,
}: {
  editorCanvas: HTMLCanvasElement | null;
  onTextExtracted: (line: DrawnLine, text: string) => void;
  isDownloadClip: boolean;
  isDrawHulls: boolean;
  theme: string;
}) {
  // const Canvas = React.lazy(() => import("./canvas"));
  return (
    <Canvas
      onTextExtracted={onTextExtracted}
      isDownloadClip={isDownloadClip}
      isDrawHulls={isDrawHulls}
      editorCanvas={editorCanvas}
      theme={theme}
    />
  );
}
