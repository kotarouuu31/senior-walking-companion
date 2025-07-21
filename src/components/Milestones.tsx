import type { Milestone } from '../types';

interface MilestonesProps {
  milestones: Milestone[];
}

export function Milestones({ milestones }: MilestonesProps) {
  const achievedCount = milestones.filter(m => m.achieved).length;
  const totalCount = milestones.length;

  return (
    <section className="card-senior mb-6" role="region" aria-labelledby="milestones-heading">
      <h2 id="milestones-heading" className="text-senior-xl font-bold text-senior-contrast mb-6 text-center leading-senior">
        🎯 マイルストーン
      </h2>
      
      <div className="mb-4 text-center">
        <p className="text-senior-base text-senior-contrast font-medium leading-senior">
          達成状況: <span className="font-bold text-success-green">{achievedCount}</span> / {totalCount}
        </p>
      </div>
      
      <div className="space-y-4" role="list" aria-label="マイルストーン一覧">
        {milestones.map((milestone) => (
          <div
            key={milestone.steps}
            className={`flex items-center p-5 rounded-2xl transition-all duration-300 shadow-md ${
              milestone.achieved
                ? 'bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-400'
                : 'bg-gray-100 border-2 border-gray-300'
            }`}
            role="listitem"
            aria-label={`${milestone.steps.toLocaleString()}歩のマイルストーン: ${milestone.message}. ${milestone.achieved ? '達成済み' : '未達成'}`}
          >
            <div className="text-4xl mr-5" aria-hidden="true">
              {milestone.achieved ? milestone.icon : '⚪'}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className={`font-bold text-senior-base ${
                  milestone.achieved ? 'text-green-800' : 'text-gray-600'
                }`}>
                  {milestone.steps.toLocaleString()}歩
                </span>
                {milestone.achieved && (
                  <span className="text-success-green font-bold text-senior-sm bg-green-50 px-2 py-1 rounded-lg">
                    ✅ 達成！
                  </span>
                )}
              </div>
              
              <div className={`text-senior-sm leading-senior ${
                milestone.achieved ? 'text-green-700 font-medium' : 'text-gray-500'
              }`}>
                {milestone.message}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-senior-sm text-senior-contrast leading-senior">
          <span aria-hidden="true">🌟</span> 目標を達成してバッジを集めよう！
        </p>
        {achievedCount === totalCount && (
          <p className="text-senior-base text-success-green font-semibold mt-2 leading-senior">
            <span aria-hidden="true">🏆</span> 全てのマイルストーンを達成しました！
          </p>
        )}
      </div>
    </section>
  );
}
