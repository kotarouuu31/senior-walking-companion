import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage, dateUtils } from './useLocalStorage';
import type { DailyData, WeeklyStats, Milestone, AppState } from '../types';
import { STORAGE_KEYS } from '../types';

// マイルストーンの定義
const MILESTONES: Omit<Milestone, 'achieved'>[] = [
  { steps: 2500, message: "軽い散歩完了！", icon: "🌱" },
  { steps: 5000, message: "半分達成！", icon: "🌳" },
  { steps: 7500, message: "もうひと頑張り！", icon: "🏃‍♂️" },
  { steps: 10000, message: "今日の目標達成！", icon: "🏆" }
];

export function useStepCounter() {
  const [currentSteps, setCurrentSteps] = useLocalStorage(STORAGE_KEYS.CURRENT_STEPS, 0);
  const [weeklyData, setWeeklyData] = useLocalStorage<DailyData[]>(STORAGE_KEYS.WEEKLY_DATA, []);
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastAchievedMilestone, setLastAchievedMilestone] = useState<Milestone | undefined>();

  // 今日のデータを取得・更新
  const getTodayData = useCallback((): DailyData => {
    const today = dateUtils.getTodayString();
    const todayData = weeklyData.find(data => data.date === today);
    return todayData || { date: today, steps: currentSteps };
  }, [weeklyData, currentSteps]);

  // 週間統計を計算
  const calculateWeeklyStats = useCallback((): WeeklyStats => {
    const lastWeekDates = dateUtils.getLastWeekDates();
    const weekData = lastWeekDates.map(date => {
      const existingData = weeklyData.find(data => data.date === date);
      return existingData || { date, steps: date === dateUtils.getTodayString() ? currentSteps : 0 };
    });

    const totalSteps = weekData.reduce((sum, data) => sum + data.steps, 0);
    const averageSteps = Math.round(totalSteps / 7);
    const achievementDays = weekData.filter(data => data.steps >= 10000).length;

    return { totalSteps, averageSteps, achievementDays };
  }, [weeklyData, currentSteps]);

  // マイルストーンの達成状況を計算
  const calculateMilestones = useCallback((): Milestone[] => {
    return MILESTONES.map(milestone => ({
      ...milestone,
      achieved: currentSteps >= milestone.steps
    }));
  }, [currentSteps]);

  // 歩数を追加
  const addSteps = useCallback((steps: number) => {
    const previousSteps = currentSteps;
    const newSteps = Math.max(0, currentSteps + steps);
    
    setCurrentSteps(newSteps);

    // 新しいマイルストーン達成をチェック
    const previousMilestones = MILESTONES.filter(m => previousSteps >= m.steps);
    const newMilestones = MILESTONES.filter(m => newSteps >= m.steps);
    
    if (newMilestones.length > previousMilestones.length) {
      const newlyAchieved = newMilestones[newMilestones.length - 1];
      setLastAchievedMilestone({
        ...newlyAchieved,
        achieved: true
      });
      setShowCelebration(true);
    }

    // 今日のデータを更新
    updateTodayData(newSteps);
  }, [currentSteps]);

  // 歩数をリセット
  const resetSteps = useCallback(() => {
    setCurrentSteps(0);
    updateTodayData(0);
    setShowCelebration(false);
    setLastAchievedMilestone(undefined);
  }, []);

  // 今日のデータを週間データに保存
  const updateTodayData = useCallback((steps: number) => {
    const today = dateUtils.getTodayString();
    const updatedWeeklyData = weeklyData.filter(data => data.date !== today);
    updatedWeeklyData.push({ date: today, steps });
    
    // 過去7日分のデータのみ保持
    const lastWeekDates = dateUtils.getLastWeekDates();
    const filteredData = updatedWeeklyData.filter(data => 
      lastWeekDates.includes(data.date)
    );
    
    setWeeklyData(filteredData);
  }, [weeklyData, setWeeklyData]);

  // お祝いモーダルを閉じる
  const closeCelebration = useCallback(() => {
    setShowCelebration(false);
  }, []);

  // 日付が変わった時の処理
  useEffect(() => {
    const today = dateUtils.getTodayString();
    const todayData = weeklyData.find(data => data.date === today);
    
    // 今日のデータが存在しない場合（日付が変わった場合）
    if (!todayData) {
      // 前日のデータを保存
      if (currentSteps > 0) {
        updateTodayData(currentSteps);
      }
      // 新しい日の歩数をリセット
      setCurrentSteps(0);
      setShowCelebration(false);
      setLastAchievedMilestone(undefined);
    }
  }, []);

  // アプリの状態を返す
  const appState: AppState = {
    currentSteps,
    todayData: getTodayData(),
    weeklyData,
    weeklyStats: calculateWeeklyStats(),
    milestones: calculateMilestones(),
    showCelebration,
    lastAchievedMilestone
  };

  return {
    ...appState,
    addSteps,
    resetSteps,
    closeCelebration
  };
}
