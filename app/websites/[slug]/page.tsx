
import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { WebsiteType } from "@/types/Website";
import { notFound } from "next/navigation";

export const revalidate = 3600; 

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

export async function generateStaticParams() {
  const websites = await getWebsites();
  return websites.map((website) => ({
    slug: website.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const websites = await getWebsites();
  const website = websites.find((w) => w.slug === slug);

  if (!website) {
    return {
      title: "Page non trouvée",
    };
  }

  return {
    title: `.com — ${website.title}`,
    description: website.thumbnail,
  };
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function WebsitePage({ params }: PageProps) {
  const { slug } = await params;
  const websites = await getWebsites();
  const website = websites.find((w) => w.slug === slug);

  if (!website) {
    notFound();
  }

  return (
    <main>
      <WebsiteHeader website={website} />
    </main>
  );
}
