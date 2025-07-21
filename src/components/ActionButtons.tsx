import React from 'react';

interface ActionButtonsProps {
  onAddSteps: (steps: number) => void;
  onReset: () => void;
}

export function ActionButtons({ onAddSteps, onReset }: ActionButtonsProps) {
  return (
    <div className="card-senior mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        操作
      </h2>
      
      <div className="space-y-4">
        {/* +1000歩ボタン */}
        <button
          onClick={() => onAddSteps(1000)}
          className="btn-senior gradient-accent w-full"
          aria-label="1000歩追加"
        >
          <span className="text-2xl mr-2">👣</span>
          +1000歩
        </button>
        
        {/* リセットボタン */}
        <button
          onClick={onReset}
          className="btn-senior bg-gradient-to-r from-pink-400 to-pink-600 w-full"
          aria-label="歩数をリセット"
        >
          <span className="text-2xl mr-2">🔄</span>
          リセット
        </button>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>💡 ヒント: 散歩から帰ったら「+1000歩」を押してね</p>
      </div>
    </div>
  );
}
