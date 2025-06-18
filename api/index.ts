interface Env {
  ASSETS: Fetcher;
}

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/nus")) {
      return Response.json([
        {
            id: 1,
            name: "IPNU",
            birthplace: "BAKALAN",
            birthdate: "2023-01-01",
            gender: "L",
            place: "BAKALAN",
            phone: "08123456789",
            },
            {
            id: 2,
            name: "IPPNU",
            birthplace: "BAKALAN",
            birthdate: "2023-01-02",
            gender: "P",
            place: "BAKALAN",
            phone: "08123456789",
            },
        ]);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;