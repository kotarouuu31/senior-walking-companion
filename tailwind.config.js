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
        'step-display': '3rem', // 48px以上の大きなフォント
        'senior-lg': '1.5rem',   // シニア向け大きめテキスト
      },
      spacing: {
        'touch-target': '44px', // 最小タッチターゲットサイズ
      }
    },
  },
  plugins: [],
}
