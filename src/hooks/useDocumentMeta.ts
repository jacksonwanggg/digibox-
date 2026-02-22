import { useEffect } from "react";

const BASE_TITLE = "UNSW DigiSoc";

interface DocumentMeta {
  title: string;
  description: string;
}

function setMetaTag(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOgTag(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} — Digital Society | UNSW's Premier Digital Community`;
    document.title = fullTitle;

    setMetaTag("description", description);
    setOgTag("og:title", fullTitle);
    setOgTag("og:description", description);
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);

    return () => {
      document.title = `${BASE_TITLE} — Digital Society | UNSW's Premier Digital Community`;
    };
  }, [title, description]);
}
