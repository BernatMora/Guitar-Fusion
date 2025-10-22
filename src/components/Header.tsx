import React from 'react';
import { Guitar, Zap, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative">
              <Guitar className="w-8 h-8 text-amber-600" />
              <Zap className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                Fusion Guitar Academy
              </h1>
              <p className="text-sm text-slate-600">
                Educación avanzada para guitarristas profesionales
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-700">Nivel Avanzado</p>
              <p className="text-xs text-slate-500">Contenido Profesional</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;