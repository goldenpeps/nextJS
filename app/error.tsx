'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        {/* Error icon */}
        <div className="mb-8 text-6xl">
          ⚠️
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Une erreur est survenue
          </h1>
          <p className="text-gray-400 text-lg">
            Nous rencontrons un problème technique. Notre équipe a été notifiée.
          </p>
        </div>

        {/* Error details */}
        {error.message && (
          <div className="mb-8 bg-red-900 bg-opacity-30 border border-red-500 rounded-lg p-4">
            <p className="text-red-200 text-sm font-mono">{error.message}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Retour à l'accueil
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm">
            Si le problème persiste, contactez{' '}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
              l'équipe support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
