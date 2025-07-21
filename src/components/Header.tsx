

interface HeaderProps {
  currentSteps: number;
}

export function Header({ currentSteps }: HeaderProps) {
  return (
    <div className="card-senior text-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        🚶‍♂️ 今日の歩数
      </h1>
      <div className="gradient-warm rounded-2xl p-6 mb-4">
        <div className="text-step-display font-bold text-white drop-shadow-lg">
          {currentSteps.toLocaleString()}
        </div>
        <div className="text-senior-lg text-white/90 font-semibold">
          歩
        </div>
      </div>
      <div className="text-lg text-gray-600">
        目標: 10,000歩
      </div>
    </div>
  );
}
