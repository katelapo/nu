interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
}

export default {
 async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/nus")) {
      let { results } = await env.DB.prepare("SELECT * FROM nus").all();
      return Response.json(results);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;