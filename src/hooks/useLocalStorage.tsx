import { useState, useEffect } from 'react';

// ローカルストレージ管理用のカスタムフック
export function useLocalStorage<T>(key: string, initialValue: T) {
  // 初期値を取得する関数
  const getStoredValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  // 値を設定する関数
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 関数の場合は現在の値を渡して実行
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // ローカルストレージの変更を監視
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.warn(`Error parsing localStorage value for key "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue] as const;
}

// 日付関連のユーティリティ関数
export const dateUtils = {
  // 今日の日付をYYYY-MM-DD形式で取得
  getTodayString: (): string => {
    return new Date().toISOString().split('T')[0];
  },

  // 日付文字列から表示用の文字列を生成
  formatDateForDisplay: (dateString: string): string => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (dateString === dateUtils.getTodayString()) {
      return '今日';
    } else if (dateString === yesterday.toISOString().split('T')[0]) {
      return '昨日';
    } else {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
  },

  // 過去7日間の日付配列を取得
  getLastWeekDates: (): string[] => {
    const dates: string[] = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      dates.push(date.toISOString().split('T')[0]);
    }
    
    return dates;
  }
};
