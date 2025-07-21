# 🚶‍♂️ シニア ウォーキング コンパニオン

高齢者向けの歩数記録Webアプリケーション。毎日10,000歩を目標に、健康的な生活をサポートします。

![App Screenshot](https://img.shields.io/badge/Status-Complete-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4)
![PWA](https://img.shields.io/badge/PWA-Ready-green)

## 🎯 プロジェクト概要

このアプリは、シニア世代の方々が毎日の歩数を楽しく記録できるよう設計されたWebアプリケーションです。大きな文字とボタン、直感的な操作性、そして達成感を味わえるマイルストーン機能を備えています。

### 🌟 主な特徴

- **シニアフレンドリーなUI**: 大きな文字（48px以上）と操作しやすいボタン（最小44px）
- **美しいグラデーションデザイン**: 暖色系を基調とした親しみやすい色彩
- **マイルストーン機能**: 段階的な達成感で継続をサポート
- **週間統計**: 詳細な歩数データと励ましメッセージ
- **PWA対応**: ホーム画面に追加してアプリのように使用可能
- **レスポンシブデザイン**: モバイルファーストでスマートフォンに最適化

## 🛠️ 技術スタック

### フロントエンド
- **React 18** - モダンなUIライブラリ
- **TypeScript** - 型安全な開発
- **Vite** - 高速な開発環境
- **Tailwind CSS** - ユーティリティファーストCSS
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
