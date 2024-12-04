import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MessageCircle, Brain, ArrowRight, Book } from 'lucide-react';

export const InteractiveLearningSupport = () => {
  const [activeStep, setActiveStep] = useState(0);

  const learningSteps = [
    {
      title: 'AIの基本概念',
      exercises: ['概念理解', '用語の確認', '事例研究'],
      complete: true
    },
    {
      title: 'プロンプトエンジニアリング',
      exercises: ['基本テクニック', '実践演習', '評価'],
      complete: false
    },
    {
      title: 'APIの活用',
      exercises: ['設定方法', 'リクエスト構築', 'レスポンス処理'],
      complete: false
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>インタラクティブ学習</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {learningSteps.map((step, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border ${
                activeStep === index ? 'border-blue-500 bg-blue-50' : ''
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{step.title}</h3>
                {step.complete && (
                  <span className="text-green-500 text-sm">完了</span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {step.exercises.map((exercise, idx) => (
                  <Button 
                    key={idx}
                    variant="outline" 
                    size="sm"
                    className="text-xs"
                  >
                    {exercise}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1"
                >
                  <Book className="w-4 h-4 mr-2" />
                  教材を見る
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  className="flex-1"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  練習する
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  className="flex-1"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  質問する
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Button 
            className="w-full"
            onClick={() => setActiveStep((prev) => (prev + 1) % learningSteps.length)}
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            次のステップへ
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};