
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { ActionButtons } from './components/ActionButtons';
import { Milestones } from './components/Milestones';
import { Statistics } from './components/Statistics';
import { CelebrationModal } from './components/CelebrationModal';
import { useStepCounter } from './hooks/useStepCounter';

function App() {
  const {
    currentSteps,
    weeklyStats,
    weeklyData,
    milestones,
    showCelebration,
    lastAchievedMilestone,
    addSteps,
    resetSteps,
    closeCelebration
  } = useStepCounter();

  return (
    <Layout>
      {/* ヘッダー：歩数表示 */}
      <Header currentSteps={currentSteps} />
      
      {/* 進捗バー */}
      <ProgressBar currentSteps={currentSteps} />
      
      {/* 操作ボタン */}
      <ActionButtons 
        onAddSteps={addSteps}
        onReset={resetSteps}
      />
      
      {/* マイルストーン */}
      <Milestones milestones={milestones} />
      
      {/* 統計情報 */}
      <Statistics 
        weeklyStats={weeklyStats}
        weeklyData={weeklyData}
      />
      
      {/* お祝いモーダル */}
      <CelebrationModal
        isOpen={showCelebration}
        milestone={lastAchievedMilestone}
        onClose={closeCelebration}
      />
      
      {/* フッター */}
      <div className="text-center text-white/80 text-sm mt-8 pb-4">
        <p>🚶‍♂️ 毎日の健康な歩みを応援します 🚶‍♀️</p>
        <p className="mt-1">目標: 1日10,000歩</p>
      </div>
    </Layout>
  );
}

export default App;
