

interface ProgressBarProps {
  currentSteps: number;
  targetSteps?: number;
}

export function ProgressBar({ currentSteps, targetSteps = 10000 }: ProgressBarProps) {
  const progress = Math.min((currentSteps / targetSteps) * 100, 100);
  const isComplete = currentSteps >= targetSteps;
  const remainingSteps = Math.max(targetSteps - currentSteps, 0);

  return (
    <section className="card-senior mb-6" role="region" aria-labelledby="progress-heading">
      <div className="flex justify-between items-center mb-4">
        <h3 id="progress-heading" className="text-senior-lg font-semibold text-senior-contrast">
          📈 進捗
        </h3>
        <span 
          className="text-senior-lg font-bold text-senior-contrast"
          aria-label={`進捗率${Math.round(progress)}パーセント`}
        >
          {Math.round(progress)}%
        </span>
      </div>
      
      <div className="w-full bg-gray-300 rounded-full h-8 overflow-hidden mb-4 shadow-inner">
        <div 
          className={`h-full rounded-full transition-all duration-700 ease-out ${
            isComplete ? 'gradient-accent' : 'gradient-warm'
          }`}
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={currentSteps}
          aria-valuemin={0}
          aria-valuemax={targetSteps}
          aria-label={`目標${targetSteps.toLocaleString()}歩に対して現在${currentSteps.toLocaleString()}歩、進捗率${Math.round(progress)}パーセント`}
        />
      </div>
      
      <div className="flex justify-between items-center text-senior-sm text-senior-contrast">
        <span className="font-medium">0歩</span>
        <span className="font-bold text-center px-4">
          {isComplete ? (
            <span className="text-success-green">
              <span aria-hidden="true">🎉</span> 達成！
            </span>
          ) : (
            <span>
              あと<span className="font-bold">{remainingSteps.toLocaleString()}</span>歩
            </span>
          )}
        </span>
        <span className="font-medium">{targetSteps.toLocaleString()}歩</span>
      </div>
      
      {isComplete && (
        <div className="mt-4 text-center">
          <p className="text-senior-base text-success-green font-semibold leading-senior">
            <span aria-hidden="true">🏆</span> おめでとうございます！今日の目標を達成しました！
          </p>
        </div>
      )}
    </section>
  );
}
