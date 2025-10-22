import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../../../components/Header';
import { RocketIcon } from '../../../components/Icons';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(formData);
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6 bg-gradient-to-br from-primary-100 via-accent-100 to-primary-200 relative overflow-hidden">
        {/* Fondo abstracto con formas orgánicas */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Formas onduladas grandes */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent-300/40 to-primary-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-accent-500/25 to-primary-500/25 rounded-full blur-xl"></div>
          
          {/* Formas geométricas decorativas */}
          <div className="absolute top-20 left-20 w-6 h-6 bg-accent-400 rounded-full opacity-60 animate-bounce-gentle"></div>
          <div className="absolute top-32 right-32 w-8 h-8 bg-primary-400 rotate-45 opacity-50"></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-accent-500 rounded-full opacity-70 animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-20 w-6 h-6 bg-primary-300 rotate-12 opacity-60"></div>
          <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-accent-300 rounded-full opacity-50"></div>
          
          {/* Elementos adicionales tipo "+" y "x" */}
          <div className="absolute top-16 right-16 text-accent-500 opacity-50 text-3xl font-bold">+</div>
          <div className="absolute bottom-16 left-16 text-primary-500 opacity-40 text-2xl font-bold">×</div>
          <div className="absolute top-1/2 left-8 text-accent-400 opacity-60 text-xl font-bold">+</div>
          <div className="absolute bottom-1/4 right-8 text-primary-400 opacity-50 text-2xl font-bold">×</div>
          
          {/* Más formas orgánicas */}
          <div className="absolute top-40 right-1/3 w-40 h-40 bg-gradient-to-br from-accent-200/30 to-primary-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 left-1/3 w-32 h-32 bg-gradient-to-br from-primary-300/20 to-accent-300/20 rounded-full blur-xl"></div>
          
        </div>

        {/* Contenedor para el backplate y el formulario */}
        <div className="relative z-10 w-full max-w-lg flex items-center justify-center">
          {/* Backplate borroso y transparente */}
          <div className="absolute inset-0 -m-8 bg-white/20 rounded-3xl backdrop-blur-lg shadow-xl z-[5]"></div>

          {/* Cuadro central del formulario */}
          <div className="bg-white rounded-3xl p-12 w-full max-w-md animate-fade-in relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-2">¡BIENVENIDO!</h1>
            <p className="text-secondary-600">Inicia sesión para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-secondary-700">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-all duration-300 bg-secondary-50"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-secondary-700">CONTRASEÑA</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-all duration-300 bg-secondary-50"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-secondary-600">
                <input type="checkbox" className="rounded" />
                Recordarme
              </label>
              <Link to="#" className="text-primary-600 hover:text-primary-700 font-medium">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {error && (
              <div className="bg-error-50 border border-error-200 text-error-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                <span className="text-error-500">⚠️</span>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold py-4 rounded-xl shadow-modern transition-all duration-300 hover:shadow-glow transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Iniciando sesión...
                </span>
              ) : (
                'INICIAR SESIÓN'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-secondary-600">
              ¿No tienes cuenta?{' '}
              <Link 
                to="/register" 
                className="text-accent-600 hover:text-accent-700 font-semibold transition-colors duration-300"
              >
                Crear cuenta
              </Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};