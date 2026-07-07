import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-stone-900 mb-4">404</h1>
        <p className="text-xl text-stone-600 mb-8">Oups ! Cette page n'existe pas.</p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors"
        >
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
}
