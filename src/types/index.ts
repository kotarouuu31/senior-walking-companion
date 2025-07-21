// 日別データの型定義
export interface DailyData {
  date: string; // YYYY-MM-DD形式
  steps: number;
}

// 週間統計の型定義
export interface WeeklyStats {
  totalSteps: number;
  averageSteps: number;
  achievementDays: number; // 10,000歩達成日数
}

// マイルストーンの型定義
export interface Milestone {
  steps: number;
  message: string;
  icon: string;
  achieved: boolean;
}

// アプリの状態管理用の型定義
export interface AppState {
  currentSteps: number;
  todayData: DailyData;
  weeklyData: DailyData[];
  weeklyStats: WeeklyStats;
  milestones: Milestone[];
  showCelebration: boolean;
  lastAchievedMilestone?: Milestone;
}

// ローカルストレージのキー定義
export const STORAGE_KEYS = {
  DAILY_DATA: 'senior-walking-daily-data',
  WEEKLY_DATA: 'senior-walking-weekly-data',
  CURRENT_STEPS: 'senior-walking-current-steps',
} as const;
