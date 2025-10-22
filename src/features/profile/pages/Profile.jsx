import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../components/Header';
import { UserIcon, TagIcon, EmailIcon, PhoneIcon, KeyIcon, GlobeIcon, LogoutIcon } from '../../../components/Icons';

export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (!user) {
    return <div className="p-8 text-center">Cargando perfil...</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 p-6">
        <div className="max-w-6xl mx-auto pt-8">
          <div className="modern-card overflow-hidden animate-slide-up">
            <div className="p-8 lg:p-12 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <UserIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-2">Mi Perfil</h1>
                    <p className="text-white/90 text-lg">Información de tu cuenta</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="modern-card p-6 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                      <UserIcon className="w-5 h-5 text-primary-600" />
                    </div>
                    <p className="text-sm font-semibold text-secondary-600">Nombre Completo</p>
                  </div>
                  <p className="text-xl font-bold text-secondary-800">{user.name}</p>
                </div>
                
                <div className="modern-card p-6 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                      <TagIcon className="w-5 h-5 text-accent-600" />
                    </div>
                    <p className="text-sm font-semibold text-secondary-600">Usuario</p>
                  </div>
                  <p className="text-xl font-bold text-secondary-800">{user.user_name}</p>
                </div>
                
                <div className="modern-card p-6 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-success-100 rounded-xl flex items-center justify-center">
                      <EmailIcon className="w-5 h-5 text-success-600" />
                    </div>
                    <p className="text-sm font-semibold text-secondary-600">Email</p>
                  </div>
                  <p className="text-xl font-bold text-secondary-800">{user.email}</p>
                </div>
                
                <div className="modern-card p-6 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-warning-100 rounded-xl flex items-center justify-center">
                      <PhoneIcon className="w-5 h-5 text-warning-600" />
                    </div>
                    <p className="text-sm font-semibold text-secondary-600">Teléfono</p>
                  </div>
                  <p className="text-xl font-bold text-secondary-800">{user.phone}</p>
                </div>
                
                {user.role && (
                  <div className="modern-card p-6 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                        <KeyIcon className="w-5 h-5 text-primary-600" />
                      </div>
                      <p className="text-sm font-semibold text-secondary-600">Rol</p>
                    </div>
                    <p className="text-xl font-bold text-secondary-800">{user.role.name}</p>
                  </div>
                )}
                
                {user.country && (
                  <div className="modern-card p-6 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                        <GlobeIcon className="w-5 h-5 text-accent-600" />
                      </div>
                      <p className="text-sm font-semibold text-secondary-600">País</p>
                    </div>
                    <p className="text-xl font-bold text-secondary-800">{user.country.name}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-error-500 to-error-600 hover:from-error-600 hover:to-error-700 text-white font-semibold px-8 py-4 rounded-xl shadow-modern-lg transition-all duration-300 hover:shadow-glow transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <LogoutIcon className="w-5 h-5" />
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};