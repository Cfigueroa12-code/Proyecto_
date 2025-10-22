import { Link } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';
import { UserIcon } from './Icons';

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className="glass-effect sticky top-0 z-30 border-b border-white/20 shadow-modern">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/profile" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-glow group-hover:shadow-glow-accent transition-all duration-300 group-hover:scale-105">
            <UserIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-lg font-bold gradient-text">RPSoft</div>
            <div className="text-sm text-secondary-600">Panel de usuario</div>
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link 
            to="/guide" 
            className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors duration-300 hover:scale-105 transform"
          >
            Guía
          </Link>
          <Link 
            to="/profile" 
            className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors duration-300 hover:scale-105 transform"
          >
            Perfil
          </Link>
          {!user ? (
            <Link 
              to="/login" 
              className="modern-button text-sm px-4 py-2"
            >
              Entrar
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-success-400 to-success-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {user.user_name?.charAt(0) || user.name?.charAt(0) || 'U'}
              </div>
              <div className="text-sm text-secondary-600">
                Hola, <span className="font-semibold text-primary-600">{user.user_name || user.name}</span>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
