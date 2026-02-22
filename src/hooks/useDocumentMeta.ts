import { useEffect } from "react";

const BASE_TITLE = "UNSW DigiSoc";
const SITE_URL = "https://unswdigitalsociety.org";

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

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} — Digital Society | UNSW's Premier Digital Community`;
    document.title = fullTitle;

    const pageUrl = `${SITE_URL}${window.location.pathname === "/" ? "" : window.location.pathname}`;

    setMetaTag("description", description);
    setOgTag("og:title", fullTitle);
    setOgTag("og:description", description);
    setOgTag("og:url", pageUrl);
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    setCanonical(pageUrl || SITE_URL);

    return () => {
      document.title = `${BASE_TITLE} — Digital Society | UNSW's Premier Digital Community`;
    };
  }, [title, description]);
}
