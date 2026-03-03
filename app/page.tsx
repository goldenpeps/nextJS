import { ButtonLink } from "@/components/ui/ButtonLink";
import Title from "@/components/ui/Title";
import Website from "@/components/ui/Website";
import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { WebsiteType } from "@/types/Website";

export const revalidate = 3600; // Revalidate every hour

async function getWebsites(): Promise<WebsiteType[]> {
  try {
    const res = await fetch("http://localhost:3000/websites.json", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch {
    return [];
  }
}

export const metadata = {
  title: ".com — Accueil",
  description:
    "Découvrez une collection curatée de sites web exceptionnels.",
};

export default async function HomePage() {
  const websites = await getWebsites();

  if (!websites.length) {
    return <main className="flex items-center justify-center h-screen">Chargement...</main>;
  }

  return (
    <main>
      <WebsiteHeader website={websites[0]} />

      <div className="bg-white px-6 py-12">
        <Title
          tag="h2"
          topLine="Voir les derniers"
          bottomLine="et ajoute tes propres reviews"
        >
          Sites web
        </Title>
        <div className="grid md:grid-cols-3 gap-4 pt-12">
          {websites
            .filter((_, i) => i > 0 && i <= 3)
            .map((w, i) => (
              <Website key={`website-${i}`} website={w} />
            ))}
        </div>
        <footer className="pt-12 flex justify-center">
          <ButtonLink href="/websites" variant="link">
            Voir tous les sites
          </ButtonLink>
        </footer>
      </div>

      <div className="bg-white px-6 py-12">
        <Title tag="h2" topLine="découvrez notre dernier">
          Highlight
        </Title>

        <figure className="rounded-lg overflow-hidden w-full max-w-280 mt-12">
          <video controls className="w-full">
            <source src="/highlight.mp4" type="video/mp4" />
          </video>
        </figure>
      </div>
    </main>
  );
}
