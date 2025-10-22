import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../../../components/Header';
import { ShieldIcon, RocketIcon } from '../../../components/Icons';

export const Register = () => {
  const [formData, setFormData] = useState({
    document_number: '',
    name: '',
    paternal_lastname: '',
    maternal_lastname: '',
    email: '',
    phone: '',
    user_name: '',
    password: '',
    document_type_id: 1,
    country_id: 179
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const dataToSend = { ...formData, last_session: new Date().toISOString().split('T')[0], account_statement: true };
      await register(dataToSend);
      alert('¡Registro exitoso! Ahora puedes iniciar sesión');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6 bg-gradient-to-br from-accent-100 via-primary-100 to-elegant-100 relative overflow-hidden">
        {/* Fondo abstracto más elegante */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Formas geométricas elegantes */}
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-24 w-56 h-56 bg-gradient-to-br from-accent-300/25 to-primary-300/25 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-xl"></div>
          
          {/* Elementos decorativos más sutiles */}
          <div className="absolute top-24 left-24 w-3 h-3 bg-primary-400 rounded-full opacity-50"></div>
          <div className="absolute top-40 right-40 w-4 h-4 bg-accent-400 rotate-45 opacity-40"></div>
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary-500 rounded-full opacity-60"></div>
          <div className="absolute top-1/2 right-24 w-3 h-3 bg-accent-300 rotate-12 opacity-50"></div>
          <div className="absolute bottom-24 right-1/4 w-2 h-2 bg-primary-300 rounded-full opacity-40"></div>
          
          {/* Formas orgánicas adicionales */}
          <div className="absolute top-32 right-1/4 w-28 h-28 bg-gradient-to-br from-accent-100/25 to-primary-100/25 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-xl"></div>
        </div>

        {/* Diseño elegante con dos columnas */}
        <div className="bg-white rounded-3xl shadow-modern-xl overflow-hidden w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 animate-fade-in relative z-10">
          <aside className="hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10 max-w-sm text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <ShieldIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Crea tu cuenta</h2>
              <p className="text-lg opacity-90 leading-relaxed">Únete a nosotros y accede a recursos exclusivos.</p>
              <div className="mt-8 flex justify-center">
                <div className="w-32 h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </aside>

          <section className="p-10 lg:p-16 flex items-center">
            <div className="mx-auto w-full max-w-2xl">
              <div className="text-center mb-10">
                <h1 className="text-4xl font-bold gradient-text mb-3">¡ÚNETE A NOSOTROS!</h1>
                <p className="text-secondary-600 text-lg">Crea tu cuenta y comienza </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-secondary-700 uppercase tracking-wide">Nombre</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-secondary-200 rounded-2xl focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-all duration-300 bg-secondary-50 hover:bg-white"
                      placeholder="Tu nombre completo"
                      required 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-secondary-700 uppercase tracking-wide">Usuario</label>
                    <input 
                      type="text" 
                      name="user_name" 
                      value={formData.user_name} 
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-secondary-200 rounded-2xl focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-all duration-300 bg-secondary-50 hover:bg-white"
                      placeholder="nombre_de_usuario"
                      required 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-secondary-700 uppercase tracking-wide">Apellido Paterno</label>
                    <input 
                      type="text" 
                      name="paternal_lastname" 
                      value={formData.paternal_lastname} 
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-secondary-200 rounded-2xl focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-all duration-300 bg-secondary-50 hover:bg-white"
                      placeholder="Apellido paterno"
                      required 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-secondary-700 uppercase tracking-wide">Apellido Materno</label>
                    <input 
                      type="text" 
                      name="maternal_lastname" 
                      value={formData.maternal_lastname} 
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-secondary-200 rounded-2xl focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-all duration-300 bg-secondary-50 hover:bg-white"
                      placeholder="Apellido materno"
                      required 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-secondary-700 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-secondary-200 rounded-2xl focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-all duration-300 bg-secondary-50 hover:bg-white"
                      placeholder="tu@email.com"
                      required 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-secondary-700 uppercase tracking-wide">Teléfono</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-secondary-200 rounded-2xl focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-all duration-300 bg-secondary-50 hover:bg-white"
                      placeholder="+51 000 000 0000"
                      required 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-secondary-700 uppercase tracking-wide">N° Documento</label>
                    <input 
                      type="text" 
                      name="document_number" 
                      value={formData.document_number} 
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-secondary-200 rounded-2xl focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-all duration-300 bg-secondary-50 hover:bg-white"
                      placeholder="12345678"
                      required 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-secondary-700 uppercase tracking-wide">Contraseña</label>
                    <input 
                      type="password" 
                      name="password" 
                      value={formData.password} 
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-secondary-200 rounded-2xl focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-all duration-300 bg-secondary-50 hover:bg-white"
                      placeholder="Mínimo 8 caracteres"
                      required 
                      minLength={8} 
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-error-50 border-2 border-error-200 text-error-700 px-6 py-4 rounded-2xl text-sm flex items-center gap-3">
                    <span className="text-error-500 text-lg">⚠️</span>
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold py-5 rounded-2xl shadow-modern-lg transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Creando cuenta...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3 text-lg">
                      <RocketIcon className="w-6 h-6" />
                      CREAR CUENTA
                    </span>
                  )}
                </button>
              </form>

              <div className="mt-10 text-center">
                <p className="text-secondary-600 text-lg">
                  ¿Ya tienes cuenta?{' '}
                  <Link 
                    to="/login" 
                    className="text-accent-600 hover:text-accent-700 font-bold transition-colors duration-300 text-lg"
                  >
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};