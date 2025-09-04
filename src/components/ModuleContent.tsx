import React from 'react';
import { ChevronLeft, ChevronRight, Clock, BarChart3 } from 'lucide-react';
import { Section, Module } from '../types';

interface ModuleContentProps {
  section?: Section;
  onNavigate: (direction: 'prev' | 'next') => void;
  canNavigatePrev: boolean;
  canNavigateNext: boolean;
  currentModule?: Module;
  currentSectionIndex: number;
}

const ModuleContent: React.FC<ModuleContentProps> = ({
  section,
  onNavigate,
  canNavigatePrev,
  canNavigateNext,
  currentModule,
  currentSectionIndex,
}) => {
  if (!section) {
    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-slate-600 mb-4">
              Selecciona un módulo para comenzar
            </h2>
            <p className="text-slate-500">
              Elige un módulo del menú lateral para acceder al contenido educativo
            </p>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = (content: any) => {
    return content.map((block: any, index: number) => {
      switch (block.type) {
        case 'heading':
          return (
            <h2 key={index} className="text-2xl font-bold text-slate-800 mb-4 mt-8 first:mt-0">
              {block.text}
            </h2>
          );
        case 'subheading':
          return (
            <h3 key={index} className="text-xl font-semibold text-slate-700 mb-3 mt-6">
              {block.text}
            </h3>
          );
        case 'paragraph':
          return (
            <p key={index} className="text-slate-600 mb-4 leading-relaxed">
              {block.text}
            </p>
          );
        case 'list':
          return (
            <ul key={index} className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              {block.items?.map((item: string, itemIndex: number) => (
                <li key={itemIndex} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          );
        case 'highlight':
          return (
            <div key={index} className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded-r-lg">
              <p className="text-amber-800 font-medium">{block.text}</p>
            </div>
          );
        case 'code':
          return (
            <div key={index} className="bg-slate-800 text-slate-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <pre className="text-sm font-mono">{block.text}</pre>
            </div>
          );
        default:
          return null;
      }
    });
  };

  const prevSection = canNavigatePrev && currentModule ? 
    currentModule.sections[currentSectionIndex - 1] : null;
  const nextSection = canNavigateNext && currentModule ? 
    currentModule.sections[currentSectionIndex + 1] : null;

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-slate-800">
              {section.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{section.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BarChart3 className="w-4 h-4" />
                <span>{section.difficulty}</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-600 mb-6">
            {section.description}
          </p>

          {/* Progress indicator */}
          {currentModule && (
            <div className="bg-white rounded-lg p-4 border border-slate-200 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">
                  Progreso del módulo: {currentModule.title}
                </span>
                <span className="text-sm text-slate-500">
                  {currentSectionIndex + 1} de {currentModule.sections.length}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSectionIndex + 1) / currentModule.sections.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          {renderContent(section.content)}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200">
          <button
            onClick={() => onNavigate('prev')}
            disabled={!canNavigatePrev}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-200 ${
              canNavigatePrev
                ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 hover:border-slate-400 shadow-sm hover:shadow'
                : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
            }`}
            title={prevSection ? `Anterior: ${prevSection.title}` : 'No hay sección anterior'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-medium">Anterior</span>
          </button>

          <button
            onClick={() => onNavigate('next')}
            disabled={!canNavigateNext}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-200 ${
              canNavigateNext
                ? 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500 shadow-sm hover:shadow'
                : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
            }`}
            title={nextSection ? `Siguiente: ${nextSection.title}` : 'No hay más secciones'}
          >
            <span className="font-medium">Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;