import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
        404
      </h1>
      <p className="text-white/70 font-body mb-8 text-center max-w-md">
        Cette page n’existe pas.
      </p>
      <Link
        href="/"
        className="border border-gold text-gold px-6 py-3 font-body text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-colors"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
