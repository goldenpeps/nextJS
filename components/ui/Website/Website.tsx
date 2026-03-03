import { WebsiteType } from "@/types/Website";
import Link from "next/link";

const colorMap: Record<string, string> = {
  black: "bg-black",
  white: "bg-white",
  green: "bg-emerald-600",
  pink: "bg-pink-300",
  purple: "bg-purple-400",
  yellow: "bg-yellow-400",
  brown: "bg-amber-800",
  beige: "bg-amber-100",
  blue: "bg-blue-500",
  orange: "bg-orange-400",
  gold: "bg-yellow-500",
};

const textColorMap: Record<string, string> = {
  black: "text-white",
  white: "text-black",
  green: "text-white",
  pink: "text-white",
  purple: "text-white",
  yellow: "text-black",
  brown: "text-white",
  beige: "text-black",
  blue: "text-white",
  orange: "text-white",
  gold: "text-black",
};

export default function Website({
  title,
  thumbnail,
  slug,
  description,
  colors,
  scroll,
  date,

}: WebsiteType) {
  const scrollColor = scroll || "black";
  const bgColorClass = colorMap[scrollColor] || "bg-black";
  const textColorClass = textColorMap[scrollColor] || "text-white";

  return (
    <Link href={`/websites/${slug}`}>
      <div
        className={`${bgColorClass} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1 h-full`}
      >
        {/* Header */}
        <div className="p-4 border-b border-opacity-20 border-white">
          <h3 className={`${textColorClass} font-bold text-lg truncate`}>
            {title}
          </h3>
        </div>

        {/* Thumbnail area */}
        <div className="relative h-40 bg-black bg-opacity-10 flex items-center justify-center overflow-hidden">
          {thumbnail && (
            <img
              src={`/websites/${thumbnail}`}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          )}
        </div>

        {/* Description */}
        <div className="p-4">
          <p
            className={`${textColorClass} text-xs leading-relaxed line-clamp-3 opacity-90 mb-3`}
          >
            {description}
          </p>

          {/* Colors */}
          <div className="flex gap-2 mb-3">
            {colors &&
              colors.slice(0, 3).map((color, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full ${colorMap[color] || "bg-gray-300"}`}
                />
              ))}
          </div>

          {/* Date */}
          {date && (
            <div className={`${textColorClass} text-xs opacity-75`}>
              {new Date(date).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
