import React from 'react';

interface ProgressBarProps {
  currentSteps: number;
  targetSteps?: number;
}

export function ProgressBar({ currentSteps, targetSteps = 10000 }: ProgressBarProps) {
  const progress = Math.min((currentSteps / targetSteps) * 100, 100);
  const isComplete = currentSteps >= targetSteps;

  return (
    <div className="card-senior mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-semibold text-gray-700">進捗</span>
        <span className="text-lg font-bold text-gray-800">
          {Math.round(progress)}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            isComplete ? 'gradient-accent' : 'gradient-warm'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>0歩</span>
        <span className="font-semibold">
          {isComplete ? '🎉 達成！' : `あと${(targetSteps - currentSteps).toLocaleString()}歩`}
        </span>
        <span>{targetSteps.toLocaleString()}歩</span>
      </div>
    </div>
  );
}
