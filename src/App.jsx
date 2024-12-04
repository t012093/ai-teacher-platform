import React from 'react';
import { EnhancedAITeacher } from './components/EnhancedAITeacher';
import { LearningProgress } from './components/LearningProgress';
import { InteractiveLearningSupport } from './components/InteractiveLearningSupport';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <EnhancedAITeacher />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <LearningProgress />
          <InteractiveLearningSupport />
        </div>
      </div>
    </div>
  );
}

export default App;