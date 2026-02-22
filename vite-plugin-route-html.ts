import { type Plugin } from "vite";
import * as fs from "fs";
import * as path from "path";
import { ROUTES, SITE, SITE_NAME, OG_IMAGE } from "./route-meta";

export default function routeHtmlPlugin(): Plugin {
  return {
    name: "route-html",
    enforce: "post",
    apply: "build",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const baseHtml = fs.readFileSync(
        path.join(distDir, "index.html"),
        "utf-8"
      );

      for (const route of ROUTES) {
        if (route.path === "/") continue;

        const routeUrl = `${SITE}${route.path}`;
        let html = baseHtml;

        html = html.replace(
          /<title>[^<]*<\/title>/,
          `<title>${route.title}</title>`
        );

        html = replaceMetaName(html, "description", route.description);
        html = replaceMetaProperty(html, "og:title", route.title);
        html = replaceMetaProperty(html, "og:description", route.description);
        html = replaceMetaProperty(html, "og:url", routeUrl);
        html = replaceMetaProperty(html, "og:image", OG_IMAGE);
        html = replaceMetaProperty(html, "og:site_name", SITE_NAME);
        html = replaceMetaName(html, "twitter:title", route.title);
        html = replaceMetaName(html, "twitter:description", route.description);

        html = html.replace(
          /<link rel="canonical"[^>]*>/,
          `<link rel="canonical" href="${routeUrl}" />`
        );

        const routeDir = path.join(distDir, route.path.slice(1));
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, "index.html"), html);
      }

      fs.copyFileSync(
        path.join(distDir, "index.html"),
        path.join(distDir, "404.html")
      );

      console.log(
        `[route-html] Generated HTML for ${ROUTES.length - 1} routes + 404.html`
      );
    },
  };
}

function replaceMetaName(html: string, name: string, content: string): string {
  const regex = new RegExp(
    `<meta\\s+name="${escapeRegex(name)}"\\s+content="[^"]*"\\s*/?>`,
    "i"
  );
  if (regex.test(html)) {
    return html.replace(regex, `<meta name="${name}" content="${escapeHtml(content)}" />`);
  }
  return html.replace(
    "</head>",
    `  <meta name="${name}" content="${escapeHtml(content)}" />\n  </head>`
  );
}

function replaceMetaProperty(html: string, property: string, content: string): string {
  const regex = new RegExp(
    `<meta\\s+property="${escapeRegex(property)}"\\s+content="[^"]*"\\s*/?>`,
    "i"
  );
  if (regex.test(html)) {
    return html.replace(regex, `<meta property="${property}" content="${escapeHtml(content)}" />`);
  }
  return html.replace(
    "</head>",
    `  <meta property="${property}" content="${escapeHtml(content)}" />\n  </head>`
  );
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
