import { Button } from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import Website from "@/components/ui/Website";
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
  title: ".com — Tous les sites web",
  description: "Découvrez notre collection complète de sites web exceptionnels.",
};

export default async function WebsitesPage() {
  const websites = await getWebsites();

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
        {websites.map((w, i) => (
          <Website key={`website-${i}`} website={w} />
        ))}
      </div>
      <footer className="pt-12 flex justify-center">
        <Button onClick={() => {}}>Charger plus de sites web</Button>
      </footer>
    </main>
  );
}
