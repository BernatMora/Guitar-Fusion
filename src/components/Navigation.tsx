import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Module } from '../types';

interface NavigationProps {
  modules: Module[];
  activeModule: string;
  activeSection: string;
  onModuleChange: (moduleId: string) => void;
  onSectionChange: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  modules,
  activeModule,
  activeSection,
  onModuleChange,
  onSectionChange,
}) => {
  const [expandedModules, setExpandedModules] = React.useState<string[]>([activeModule]);

  const toggleModule = (moduleId: string) => {
    if (expandedModules.includes(moduleId)) {
      setExpandedModules(expandedModules.filter(id => id !== moduleId));
    } else {
      setExpandedModules([...expandedModules, moduleId]);
    }
    onModuleChange(moduleId);
  };

  return (
    <nav className="h-screen overflow-y-auto py-6">
      <div className="px-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">
          Módulos de Estudio
        </h2>
        <p className="text-sm text-slate-600">
          Contenido estructurado para el desarrollo profesional
        </p>
      </div>

      <div className="space-y-2">
        {modules.map((module) => {
          const isExpanded = expandedModules.includes(module.id);
          const isActive = activeModule === module.id;

          return (
            <div key={module.id} className="px-4">
              <button
                onClick={() => toggleModule(module.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-50 text-amber-800 border border-amber-200'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <module.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{module.title}</span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {isExpanded && (
                <div className="mt-2 ml-8 space-y-1">
                  {module.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => onSectionChange(section.id)}
                      className={`w-full text-left p-2 rounded-md text-sm transition-colors duration-150 ${
                        activeSection === section.id
                          ? 'bg-amber-100 text-amber-800 font-medium'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;