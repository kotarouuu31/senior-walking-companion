

interface HeaderProps {
  currentSteps: number;
}

export function Header({ currentSteps }: HeaderProps) {
  return (
    <header className="card-senior text-center mb-6" role="banner">
      <h1 className="text-senior-xl font-bold text-senior-contrast mb-6 leading-senior">
        🚶‍♂️ 今日の歩数
      </h1>
      <div className="gradient-warm rounded-3xl p-8 mb-6" role="region" aria-label="現在の歩数表示">
        <div 
          className="text-step-display font-bold text-white drop-shadow-lg"
          aria-label={`現在の歩数は${currentSteps.toLocaleString()}歩です`}
        >
          {currentSteps.toLocaleString()}
        </div>
        <div className="text-senior-xl text-white/95 font-semibold mt-2">
          歩
        </div>
      </div>
      <div className="text-senior-base text-senior-contrast font-medium leading-senior">
        🎯 目標: 10,000歩
      </div>
    </header>
  );
}
