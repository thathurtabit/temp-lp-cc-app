export type EScriptAppendTo = "head" | "body";

interface IAddScript {
  id: string;
  src?: string;
  text?: string;
  async?: boolean;
  defer?: boolean;
  appendTo?: "head" | "body";
}

export const addScript = ({
  id,
  src,
  text,
  async,
  defer,
  appendTo,
}: IAddScript) => {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;

  if (src) script.src = src;
  if (text) script.text = text;
  if (async) script.async = true;
  if (defer) script.defer = true;

  if (document.head && document.body) {
    if (appendTo === "head") {
      document.head.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
  }
};
