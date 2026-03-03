import { WebsiteType } from "@/types/Website";



export async function getStaticPaths() {
  const websites = await fetch("http://localhost:3000/websites.json").then(
    (res) => res.json(),
  );
  const colors = await fetch("http://localhost:3000/colors.json").then((res) => res.json());
  const paths = websites.map((w: WebsiteType) => ({
    params: { slug: w.slug },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const websites = await fetch("http://localhost:3000/websites.json").then(
    (res) => res.json(),
  );
  const colors = await fetch("http://localhost:3000/colors.json").then((res) => res.json());
  const currentWebsite = websites.find((w: WebsiteType) => w.slug == slug);
  console.log("currentWebsite: ", currentWebsite);
  if (!currentWebsite) return { redirect: { destination: "/websites" } };

  return { props: { website: currentWebsite, colors } };
}

type WebsitePageType = {
  website: WebsiteType;
  colors: Record<string, { name: string; hex: string; light: boolean }>;
};

export default function WebsitePage({ website, colors }: WebsitePageType) {
  const getColorHex = (colorName: string): string => {
    return colors[colorName]?.hex || "#000000";
  };

  const scrollColor = website.scroll || "black";
  const bgColorHex = getColorHex(scrollColor);

  return (
    <div className="min-h-screen  bg-gray-50">
      <div className=" mx-4 my-4 mt-4 px-8 py-6">
        <div className="flex justify-between items-center gap-4 flex-col">
          <div />
          <h6 className="text-sm font-semibold text-gray-600">
            {" "}
            <div className="text-sm font-semibold text-gray-600">
              {website.date &&
                new Date(website.date)
                  .toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .toUpperCase()}
            </div>
          </h6>
          <h1 className="text-5xl font-black text-center flex-1">
            {website.title}
          </h1>
        </div>
        <div className="flex justify-center gap-3 mt-4">
          {(website.colors || []).slice(0, 4).map((color, idx) => (
            <div
              key={idx}
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: getColorHex(color) }}
            />
          ))}
        </div>
        <br></br>
      </div>

      <div className="mx-4 my-4 rounded-3xl overflow-hidden" style={{ backgroundColor: bgColorHex }}>
        <div className="flex items-center min-h-96">
          <div className="w-1/3 flex items-center justify-center p-12">
            {website.images && website.images.length > 0 ? (
              <img
                src={`/websites/${website.images[0]}`}
                alt={website.title}
                className="max-w-full max-h-64 object-contain"
              />
            ) : (
              <div className="text-6xl opacity-30">📷</div>
            )}
          </div>

          <div className="w-2/3 p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-black text-white mb-2">
                {website.title}
              </h2>
              <p className="text-xs text-amber-700 font-bold tracking-wide mb-6">
                FABRIQUE DE BIÈRES ET DE CURIOSITÉ
              </p>

              <p className="text-white text-sm leading-relaxed">
                {website.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                <button className="bg-gray-800 text-white px-3 py-1 text-xs font-semibold hover:bg-gray-900">
                  .COM
                </button>
                <button className="bg-gray-800 text-white px-3 py-1 text-xs font-semibold hover:bg-gray-900">
                  Sites web
                </button>
                <button className="bg-gray-800 text-white px-3 py-1 text-xs font-semibold hover:bg-gray-900">
                  Couleurs
                </button>
                <button className="bg-pink-400 text-gray-800 px-3 py-1 text-xs font-semibold hover:bg-pink-500">
                  Voir le site
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-white font-bold text-sm">
                  EN SAVOIR PLUS
                </span>
                <button className="text-white text-xl">»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex gap-4 mx-4 my-4 rounded-3xl overflow-hidden h-32">
        <button className="flex-1 bg-gray-900 text-white font-bold text-lg hover:bg-black transition flex flex-col items-center justify-center gap-2">  
          <span className="text-xl">↓</span>
        </button>
        <button
          className="flex-1 text-white font-bold text-lg hover:opacity-90 transition flex flex-col items-center justify-center gap-2"
          style={{ backgroundColor: bgColorHex }}
        >
          <span className="text-xl">↓</span>
        </button>
        <button 
          className="flex-1 text-white font-bold text-lg hover:opacity-90 transition flex flex-col items-center justify-center gap-2"
          style={{ backgroundColor: bgColorHex }}
        >
          <span className="text-xl">↓</span>
        </button>
      </div>
    </div>
  );
}
