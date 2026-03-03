import Website from "@/components/ui/Website/Website";
import { WebsiteType } from "@/types/Website";

export async function getStaticProps() {
  const websites = await fetch("http://localhost:3000/websites.json").then(
    (res) => res.json(),
  );
  const colors = await fetch("http://localhost:3000/colors.json").then(
    (res) => res.json(),
  );
  console.log("websites: ", websites);
  return { props: { websites, colors } };
}

type WebsitesPageType = {
  websites: WebsiteType[];
  colors: Record<string, { name: string; hex: string; light: boolean }>;
};
export default function WebsitesPage({
  websites,
  colors,
}: WebsitesPageType) {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {websites.map((w, i) => (
            <Website key={`website-${i}`} {...w}  />
          ))}
        </div>
      </div>
    </div>
  );
}
