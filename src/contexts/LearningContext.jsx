import React, { createContext, useContext, useState, useEffect } from 'react';

const LearningContext = createContext();

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};

export const LearningProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    currentLesson: 0,
    completedLessons: [],
    streakDays: 0,
    lastStudyDate: null,
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // ローカルストレージから学習進捗を読み込む
    const savedProgress = localStorage.getItem('learning-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    // 進捗状況をローカルストレージに保存
    localStorage.setItem('learning-progress', JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (lessonId) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: [...prev.completedLessons, lessonId],
      lastStudyDate: new Date().toISOString(),
    }));
  };

  const updateStreak = () => {
    const today = new Date();
    const lastStudy = progress.lastStudyDate ? new Date(progress.lastStudyDate) : null;

    if (!lastStudy) {
      setProgress(prev => ({ ...prev, streakDays: 1 }));
      return;
    }

    const diffDays = Math.floor((today - lastStudy) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      setProgress(prev => ({ ...prev, streakDays: prev.streakDays + 1 }));
    } else if (diffDays > 1) {
      setProgress(prev => ({ ...prev, streakDays: 1 }));
    }
  };

  const addMessage = (message) => {
    setMessages(prev => [...prev, message]);
  };

  const value = {
    progress,
    messages,
    completeLesson,
    updateStreak,
    addMessage,
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
};