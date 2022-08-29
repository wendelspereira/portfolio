import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";


export const codeMirrorTheme = createTheme({
    theme: "dark",
    settings: {
      background: "#011221",
      foreground: "#75baff",
      caret: "#5d00ff",
      selection: "#036dd626",
      selectionMatch: "#036dd626",
      lineHighlight: "#8a91991a",
      gutterBackground: "#011221",
      gutterForeground: "#607B96",
    },
    styles: [
      { tag: t.comment, color: "#607B96" },
      { tag: t.variableName, color: "#5565E8" },
      { tag: [t.string, t.special(t.brace)], color: "#FEA55F" },
      { tag: t.number, color: "#5c6166" },
      { tag: t.bool, color: "#5c6166" },
      { tag: t.null, color: "#5c6166" },
      { tag: t.keyword, color: "#C98BDF" },
      { tag: t.operator, color: "#C98BDF" },
      { tag: t.className, color: "#5c6166" },
      { tag: t.definition(t.typeName), color: "#5c6166" },
      { tag: t.typeName, color: "#c0ac39" },
      { tag: t.angleBracket, color: "#5c6166" },
      { tag: t.tagName, color: "#5c6166" },
      { tag: t.attributeName, color: "#5c6166" },
    ],
  });