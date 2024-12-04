import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export const LearningProgress = () => {
  const progressData = [
    { day: '月', progress: 30, focus: 80 },
    { day: '火', progress: 45, focus: 75 },
    { day: '水', progress: 55, focus: 85 },
    { day: '木', progress: 70, focus: 90 },
    { day: '金', progress: 85, focus: 88 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>学習の進捗状況</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">今週の学習目標</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <Progress value={85} className="w-full" />
          </div>

          <div className="h-64">
            <LineChart width={500} height={200} data={progressData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="progress" 
                stroke="#2563eb" 
                name="学習進度"
              />
              <Line 
                type="monotone" 
                dataKey="focus" 
                stroke="#16a34a" 
                name="集中度"
              />
            </LineChart>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};