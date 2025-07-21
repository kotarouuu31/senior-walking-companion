/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 暖色系グラデーション（メインカラー）
        'warm-orange': '#FF8A65',
        'warm-yellow': '#FFD54F',
        // アクセントカラー（ブルーからグリーン）
        'accent-blue': '#42A5F5',
        'accent-green': '#66BB6A',
        // 背景（パープル系）
        'bg-purple-light': '#E1BEE7',
        'bg-purple-dark': '#9C27B0',
        // 成功色（グリーン系）
        'success-green': '#4CAF50',
      },
      fontSize: {
        'step-display': '4rem',     // 64px - より大きな歩数表示
        'senior-xl': '2rem',        // 32px - 大きなヘッダー
        'senior-lg': '1.5rem',      // 24px - 大きめテキスト
        'senior-base': '1.125rem',  // 18px - 基本テキスト（16px以上）
        'senior-sm': '1rem',        // 16px - 小さめテキスト（最小16px）
      },
      spacing: {
        'touch-target': '48px',     // 48px - より大きなタッチターゲット
        'touch-target-lg': '56px',  // 56px - 特に重要なボタン用
      },
      lineHeight: {
        'senior': '1.6',            // 読みやすい行間
      }
    },
  },
  plugins: [],
}
