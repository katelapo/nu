interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
}

export default {
 async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/nus")) {
       if (request.method == 'GET') {
        let { results } = await env.DB.prepare("SELECT * FROM nus").all();
        return Response.json(results);
      } else if (request.method == 'POST') {
        const newId = crypto.randomUUID()
        const input = await request.json<any>()
        const query = `INSERT INTO nus(id,name,birthplace,birthdate,gender,place,phone,time) values ("${newId}","${input.name}","${input.birthplace}","${input.birthdate}","${input.gender}","${input.place}","${input.phone}","${input.time}")`;
        const newNu = await env.DB.exec(query);
        return Response.json(newNu);
      }
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;