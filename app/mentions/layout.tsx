import "@/styles/mdx.css";

export default function MentionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 prose prose-sm md:prose-base max-w-none">
        {children}
      </div>
    </article>
  );
}
