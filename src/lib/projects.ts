const sortOrder = ["bstell-online", "kitesurf-adventure", "kmt25", "web-dojo"];

export function sortProjects(a: { id: string }, b: { id: string }) {
  const aIndex = sortOrder.indexOf(a.id.split("/")[1]);
  const bIndex = sortOrder.indexOf(b.id.split("/")[1]);
  if (aIndex === -1 && bIndex === -1) {
    return 0;
  }
  if (aIndex === -1) {
    return 1;
  }
  if (bIndex === -1) {
    return -1;
  }
  return aIndex - bIndex;
}
