// Keep search, sorting and filter URLs usable while indexing the shop and
// its dedicated collection pages.
export default async function handler(request, context) {
  const params = new URL(request.url).searchParams;
  const filters = ["q", "cat", "avail", "sort", "page", "promo", "sale"];
  if (!filters.some((key) => params.has(key))) return context.next();

  const response = await context.next();
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex, follow");
  return new Response(response.body, { status: response.status, headers });
}

export const config = { path: "/shop.html" };
