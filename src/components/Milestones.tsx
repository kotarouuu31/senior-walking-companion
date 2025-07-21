import type { Milestone } from '../types';

interface MilestonesProps {
  milestones: Milestone[];
}

export function Milestones({ milestones }: MilestonesProps) {
  return (
    <div className="card-senior mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        🎯 マイルストーン
      </h2>
      
      <div className="space-y-3">
        {milestones.map((milestone) => (
          <div
            key={milestone.steps}
            className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
              milestone.achieved
                ? 'bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-300'
                : 'bg-gray-100 border-2 border-gray-200'
            }`}
          >
            <div className="text-3xl mr-4">
              {milestone.achieved ? milestone.icon : '⚪'}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${
                  milestone.achieved ? 'text-green-800' : 'text-gray-600'
                }`}>
                  {milestone.steps.toLocaleString()}歩
                </span>
                {milestone.achieved && (
                  <span className="text-green-600 font-bold text-sm">
                    ✅ 達成！
                  </span>
                )}
              </div>
              
              <div className={`text-sm ${
                milestone.achieved ? 'text-green-700' : 'text-gray-500'
              }`}>
                {milestone.message}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>🌟 目標を達成してバッジを集めよう！</p>
      </div>
    </div>
  );
}
