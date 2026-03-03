import "./mdx.css";

export const metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site .com — informations légales, propriété intellectuelle et protection des données.",
};

export default function MentionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 prose prose-sm md:prose-base max-w-none">
        {children}
      </article>
    </main>
  );
}
