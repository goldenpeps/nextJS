'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 text */}
        <div className="mb-8">
          <h1 className="text-9xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page non trouvée
          </h2>
          <p className="text-gray-400 text-lg">
            Désolé, la page que vous recherchez n'existe pas ou a été supprimée.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12 text-6xl">
          🔍
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/websites"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Voir les sites
          </Link>
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm">
            Besoin d'aide? Consultez nos{' '}
            <Link href="/mentions" className="text-blue-400 hover:text-blue-300 font-semibold">
              mentions légales
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
