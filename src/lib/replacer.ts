function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&#x27")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceToBr(src: string): string {
  return src.replace(/\n/g, "<br />");
}

export function replaceToHtml(str: string): string {
  return replaceToBr(sanitize(str));
}
