

interface ActionButtonsProps {
  onAddSteps: (steps: number) => void;
  onReset: () => void;
}

export function ActionButtons({ onAddSteps, onReset }: ActionButtonsProps) {
  const handleAddSteps = () => {
    onAddSteps(1000);
  };

  const handleReset = () => {
    if (window.confirm('歩数をリセットしてもよろしいですか？')) {
      onReset();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <section className="card-senior mb-6" role="region" aria-labelledby="actions-heading">
      <h2 id="actions-heading" className="text-senior-xl font-bold text-senior-contrast mb-6 text-center leading-senior">
        📱 操作
      </h2>
      
      <div className="space-y-6">
        {/* +1000歩ボタン */}
        <button
          onClick={handleAddSteps}
          onKeyDown={(e) => handleKeyDown(e, handleAddSteps)}
          className="btn-senior-lg gradient-accent w-full"
          aria-label="1000歩を追加します。現在の歩数に1000歩が加算されます。"
          aria-describedby="add-steps-hint"
          type="button"
        >
          <span className="text-3xl mr-3" aria-hidden="true">👣</span>
          +1000歩
        </button>
        
        {/* リセットボタン */}
        <button
          onClick={handleReset}
          onKeyDown={(e) => handleKeyDown(e, handleReset)}
          className="btn-senior-lg bg-gradient-to-r from-pink-400 to-pink-600 w-full"
          aria-label="歩数をリセットします。確認ダイアログが表示されます。"
          aria-describedby="reset-hint"
          type="button"
        >
          <span className="text-3xl mr-3" aria-hidden="true">🔄</span>
          リセット
        </button>
      </div>
      
      <div className="mt-6 text-center">
        <p id="add-steps-hint" className="text-senior-sm text-senior-contrast leading-senior mb-2">
          <span aria-hidden="true">💡</span> ヒント: 散歩から帰ったら「+1000歩」を押してね
        </p>
        <p id="reset-hint" className="text-senior-sm text-gray-600 leading-senior">
          <span aria-hidden="true">⚠️</span> リセットは確認後に実行されます
        </p>
      </div>
    </section>
  );
}
