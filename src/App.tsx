import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ModuleContent from './components/ModuleContent';
import { modules } from './data/modules';

function App() {
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const [activeSection, setActiveSection] = useState(modules[0].sections[0].id);

  const handleModuleChange = (moduleId: string) => {
    setActiveModule(moduleId);
    const module = modules.find(m => m.id === moduleId);
    if (module && module.sections.length > 0) {
      setActiveSection(module.sections[0].id);
    }
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const currentModule = modules.find(m => m.id === activeModule);
  const currentSection = currentModule?.sections.find(s => s.id === activeSection);

  const navigateToSection = (direction: 'prev' | 'next') => {
    if (!currentModule) return;

    const currentIndex = currentModule.sections.findIndex(s => s.id === activeSection);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    } else {
      newIndex = currentIndex < currentModule.sections.length - 1 ? currentIndex + 1 : currentIndex;
    }

    if (newIndex !== currentIndex) {
      setActiveSection(currentModule.sections[newIndex].id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <aside className="w-80 bg-white shadow-sm border-r border-slate-200">
          <Navigation
            modules={modules}
            activeModule={activeModule}
            activeSection={activeSection}
            onModuleChange={handleModuleChange}
            onSectionChange={handleSectionChange}
          />
        </aside>
        
        <main className="flex-1">
          <ModuleContent
            section={currentSection}
            onNavigate={navigateToSection}
            canNavigatePrev={currentModule ? currentModule.sections.findIndex(s => s.id === activeSection) > 0 : false}
            canNavigateNext={currentModule ? currentModule.sections.findIndex(s => s.id === activeSection) < currentModule.sections.length - 1 : false}
            currentModule={currentModule}
            currentSectionIndex={currentModule ? currentModule.sections.findIndex(s => s.id === activeSection) : 0}
          />
        </main>
      </div>
    </div>
  );
}

export default App;