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
      // フォーカス管理
      const modal = document.querySelector('[role="dialog"]') as HTMLElement;
      if (modal) {
        modal.focus();
      }
      
      // 2秒後に自動で閉じる
      const timer = setTimeout(onClose, 2000);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        clearTimeout(timer);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !milestone) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      role="presentation"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-10 max-w-md w-full text-center animate-bounce shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="celebration-title"
        aria-describedby="celebration-message"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* アイコンとメッセージ */}
        <div className="text-9xl mb-6 animate-pulse" aria-hidden="true">
          {milestone.icon}
        </div>
        
        <h2 id="celebration-title" className="text-senior-xl font-bold text-senior-contrast mb-4 leading-senior">
          🎊 おめでとうございます！
        </h2>
        
        <div className="gradient-warm rounded-3xl p-6 mb-6 shadow-lg">
          <div className="text-senior-xl font-bold text-white">
            {milestone.steps.toLocaleString()}歩 達成！
          </div>
        </div>
        
        <p id="celebration-message" className="text-senior-lg text-senior-contrast mb-8 leading-senior font-medium">
          {milestone.message}
        </p>
        
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="btn-senior-lg gradient-accent mb-4"
          aria-label="お祝いメッセージを閉じる"
          type="button"
          autoFocus
        >
          <span className="text-3xl mr-3" aria-hidden="true">👍</span>
          ありがとう！
        </button>
        
        <div className="text-senior-sm text-gray-600 leading-senior">
          <span aria-hidden="true">⏰</span> 2秒後に自動で閉じます
        </div>
      </div>
    </div>
  );
}
