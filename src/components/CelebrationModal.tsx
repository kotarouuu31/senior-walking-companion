import { useEffect } from 'react';
import type { Milestone } from '../types';

interface CelebrationModalProps {
  isOpen: boolean;
  milestone?: Milestone;
  onClose: () => void;
}

export function CelebrationModal({ isOpen, milestone, onClose }: CelebrationModalProps) {
  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // 3秒後に自動で閉じる
      const timer = setTimeout(onClose, 3000);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        clearTimeout(timer);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !milestone) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center animate-bounce">
        {/* アイコンとメッセージ */}
        <div className="text-8xl mb-4 animate-pulse">
          {milestone.icon}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          おめでとうございます！
        </h2>
        
        <div className="gradient-warm rounded-2xl p-4 mb-4">
          <div className="text-xl font-bold text-white">
            {milestone.steps.toLocaleString()}歩 達成！
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-6">
          {milestone.message}
        </p>
        
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="btn-senior gradient-accent"
          aria-label="お祝いを閉じる"
        >
          <span className="text-xl mr-2">👍</span>
          ありがとう！
        </button>
        
        <div className="mt-4 text-sm text-gray-500">
          3秒後に自動で閉じます
        </div>
      </div>
    </div>
  );
}
