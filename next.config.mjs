/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "s0.wp.com" },
      { protocol: "https", hostname: "**.vercel.app" },
      { protocol: "https", hostname: "ikalkulatorjadian.id" },
      { protocol: "https", hostname: "icontadordedias.com.br" },
      { protocol: "https", hostname: "esnafkefaletkredihesaplama.tr" },
      { protocol: "https", hostname: "calculadoraperiodofertil.com.br" },
      { protocol: "https", hostname: "icalcularrfc.mx" },
      { protocol: "https", hostname: "calculadoradealquileres.ar" },
      { protocol: "https", hostname: "calculadoradehorastrabalhadas.com.br" },
      { protocol: "https", hostname: "www.kalkulatorhari.com" },
      { protocol: "https", hostname: "kalkulatorfrekwencji.pl" },
      { protocol: "https", hostname: "calculadoraisr.mx" },
      { protocol: "https", hostname: "calculadorasegurodesemprego.com.br" },
      { protocol: "https", hostname: "kalkulatorpaliwa.pl" },
      { protocol: "https", hostname: "www.icalcoloiva.it" },
      { protocol: "https", hostname: "xn--kdemtazminathesaplama-kgdl.tr" },
      { protocol: "https", hostname: "isaathesaplama.tr" },
      { protocol: "https", hostname: "traductorarabeespanol.es" },
      { protocol: "http", hostname: "traductorarabeespanol.es" },
      { protocol: "https", hostname: "icalculadorauf.cl" },
      { protocol: "https", hostname: "tapuharcihesaplama.tr" },
      { protocol: "https", hostname: "icalcolostipendionetto.it" },
      { protocol: "https", hostname: "ikalkulatorprocentowy.pl" },
      { protocol: "https", hostname: "buergergeld-rechner-2026.de" },
    ],
  },
};

export default nextConfig;
