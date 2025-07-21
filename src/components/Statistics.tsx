import type { DailyData } from '../types';

interface StatisticsProps {
  weeklyData: DailyData[];
}

export function Statistics({ weeklyData }: StatisticsProps) {
  // 週間統計を計算
  const totalSteps = weeklyData.reduce((sum, day) => sum + day.steps, 0);
  const averageSteps = weeklyData.length > 0 ? Math.round(totalSteps / weeklyData.length) : 0;
  const maxSteps = weeklyData.length > 0 ? Math.max(...weeklyData.map(d => d.steps)) : 0;
  const daysWithGoal = weeklyData.filter(day => day.steps >= 10000).length;

  // 励ましメッセージ
  const getEncouragementMessage = () => {
    if (averageSteps >= 10000) {
      return "素晴らしい！毎日の目標を達成していますね！🌟";
    } else if (averageSteps >= 7500) {
      return "とても良いペースです！もう少しで目標達成！💪";
    } else if (averageSteps >= 5000) {
      return "良いスタートです！少しずつ歩数を増やしていきましょう！🚶‍♀️";
    } else {
      return "歩き始めることが大切です！今日から一歩ずつ！👟";
    }
  };

  return (
    <section className="card-senior" role="region" aria-labelledby="statistics-heading">
      <h2 id="statistics-heading" className="text-senior-xl font-bold text-senior-contrast mb-6 text-center leading-senior">
        📊 週間統計
      </h2>

      {/* 統計カード */}
      <div className="grid grid-cols-2 gap-4 mb-8" role="group" aria-label="週間統計データ">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center shadow-md" role="article">
          <div className="text-senior-xl font-bold text-blue-800 mb-2">
            {totalSteps.toLocaleString()}
          </div>
          <div className="text-senior-sm text-blue-700 font-medium leading-senior">
            合計歩数
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center shadow-md" role="article">
          <div className="text-senior-xl font-bold text-green-800 mb-2">
            {averageSteps.toLocaleString()}
          </div>
          <div className="text-senior-sm text-green-700 font-medium leading-senior">
            平均歩数
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 text-center shadow-md" role="article">
          <div className="text-senior-xl font-bold text-purple-800 mb-2">
            {maxSteps.toLocaleString()}
          </div>
          <div className="text-senior-sm text-purple-700 font-medium leading-senior">
            最高記録
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 text-center shadow-md" role="article">
          <div className="text-senior-xl font-bold text-orange-800 mb-2">
            {daysWithGoal}
          </div>
          <div className="text-senior-sm text-orange-700 font-medium leading-senior">
            目標達成日数
          </div>
        </div>
      </div>

      {/* 日別データ */}
      {weeklyData.length > 0 && (
        <div className="mb-8">
          <h3 className="text-senior-lg font-semibold text-senior-contrast mb-4 text-center leading-senior">
            📅 日別記録
          </h3>
          <div className="space-y-3" role="list" aria-label="日別歩数記録">
            {weeklyData.map((day, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl shadow-sm"
                role="listitem"
                aria-label={`${day.date}の歩数: ${day.steps.toLocaleString()}歩${day.steps >= 10000 ? '、目標達成' : ''}`}
              >
                <span className="font-medium text-senior-base text-senior-contrast">
                  {day.date}
                </span>
                <div className="flex items-center">
                  <span className="font-bold text-senior-base text-senior-contrast mr-3">
                    {day.steps.toLocaleString()}歩
                  </span>
                  {day.steps >= 10000 && (
                    <span className="text-2xl" aria-label="目標達成" role="img">🎯</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 励ましメッセージ */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl p-6 text-center shadow-md" role="complementary">
        <p className="text-senior-base text-senior-contrast font-medium leading-senior">
          {getEncouragementMessage()}
        </p>
      </div>
    </section>
  );
}
