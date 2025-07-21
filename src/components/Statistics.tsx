import type { WeeklyStats, DailyData } from '../types';
import { dateUtils } from '../hooks/useLocalStorage';

interface StatisticsProps {
  weeklyStats: WeeklyStats;
  weeklyData: DailyData[];
}

export function Statistics({ weeklyStats, weeklyData }: StatisticsProps) {
  const { totalSteps, averageSteps, achievementDays } = weeklyStats;

  return (
    <div className="card-senior mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        📊 今週の記録
      </h2>
      
      {/* 統計サマリー */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="gradient-warm rounded-xl p-4 text-white text-center">
          <div className="text-2xl font-bold">
            {totalSteps.toLocaleString()}
          </div>
          <div className="text-sm opacity-90">今週の合計歩数</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="gradient-accent rounded-xl p-4 text-white text-center">
            <div className="text-xl font-bold">
              {averageSteps.toLocaleString()}
            </div>
            <div className="text-xs opacity-90">平均歩数/日</div>
          </div>
          
          <div className="bg-gradient-to-r from-success-green to-green-600 rounded-xl p-4 text-white text-center">
            <div className="text-xl font-bold">
              {achievementDays}日
            </div>
            <div className="text-xs opacity-90">目標達成日数</div>
          </div>
        </div>
      </div>
      
      {/* 週間グラフ */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">📈 週間グラフ</h3>
        <div className="space-y-2">
          {dateUtils.getLastWeekDates().map(date => {
            const dayData = weeklyData.find(data => data.date === date) || { date, steps: 0 };
            const percentage = Math.min((dayData.steps / 10000) * 100, 100);
            const isToday = date === dateUtils.getTodayString();
            const isAchieved = dayData.steps >= 10000;
            
            return (
              <div key={date} className="flex items-center space-x-3">
                <div className={`text-sm font-medium w-12 ${
                  isToday ? 'text-purple-600 font-bold' : 'text-gray-600'
                }`}>
                  {dateUtils.formatDateForDisplay(date)}
                </div>
                
                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      isAchieved ? 'gradient-accent' : 'gradient-warm'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                
                <div className="text-sm font-medium w-16 text-right">
                  {dayData.steps.toLocaleString()}
                </div>
                
                {isAchieved && (
                  <div className="text-green-500">🏆</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* 励ましメッセージ */}
      <div className="text-center text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
        {achievementDays === 7 ? (
          <p>🎉 素晴らしい！今週は毎日目標達成です！</p>
        ) : achievementDays >= 5 ? (
          <p>👏 とても良いペースです！この調子で頑張りましょう！</p>
        ) : achievementDays >= 3 ? (
          <p>💪 順調です！もう少し歩けば目標達成ですね！</p>
        ) : (
          <p>🌱 少しずつでも大丈夫！毎日続けることが大切です！</p>
        )}
      </div>
    </div>
  );
}
