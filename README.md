# 🚶‍♂️ 10000歩 - シニア向け歩数記録PWAアプリ

**おじいちゃん・おばあちゃんのための、やさしい歩数記録アプリ**

毎日10,000歩を目標に、健康的で楽しい歩行習慣をサポートする完全PWA対応アプリです。

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-10000歩アプリ-success?style=for-the-badge)](https://kotarouuu31.github.io/senior-walking-companion/)
[![PWA Ready](https://img.shields.io/badge/📱_PWA-Ready-green?style=for-the-badge)](https://kotarouuu31.github.io/senior-walking-companion/)
[![GitHub Pages](https://img.shields.io/badge/🚀_Deployed_on-GitHub_Pages-blue?style=for-the-badge)](https://kotarouuu31.github.io/senior-walking-companion/)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/kotarouuu31/senior-walking-companion/actions)

![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite)
![PWA](https://img.shields.io/badge/PWA-Complete-FF6B6B?logo=pwa)

## 🎯 プロジェクト概要

「10000歩」は、シニア世代の健康促進を目的とした、完全PWA対応の歩数記録アプリです。

### 🆕 最新アップデート (2025年8月)
- ✅ **GitHub Pages自動デプロイ**: mainブランチへのプッシュで自動更新
- ✅ **PWA完全対応**: オフライン機能、ホーム画面追加、Service Worker実装
- ✅ **アクセシビリティ強化**: ARIA属性、キーボードナビゲーション完全対応
- ✅ **UI/UX改善**: シニア向け大きなフォント・ボタン、高コントラストデザイン
- ✅ **お祝い機能**: 目標達成時の自動クローズモーダル（2秒）

**🏆 なぜこのアプリが特別なのか？**
- スマートフォンのホーム画面に追加して、**ネイティブアプリのように使用可能**
- **オフライン対応**で、インターネットがなくても基本機能が動作
- シニア向けに最適化された**大きな文字・ボタン**で操作しやすい
- **アクセシビリティ完全対応**（スクリーンリーダー、キーボードナビゲーション）

## ✨ 主な特徴

### 📱 PWA（Progressive Web App）機能
- 🏠 **ホーム画面に追加**: スマートフォンのアイコンから直接起動
- 📶 **オフライン対応**: インターネット接続なしでも基本機能が利用可能
- ⚡ **高速起動**: Service Workerによる高速化とキャッシュ機能
- 🔄 **自動更新**: 新しいバージョンが自動で適用

### 👴👵 シニアフレンドリーなデザイン
- 📏 **大きな文字**: 最大64pxの読みやすいフォントサイズ
- 🎯 **大きなボタン**: 最小48pxのタッチしやすいボタン
- 🌈 **高コントラスト**: 見やすい色彩設計
- 🎨 **温かみのあるデザイン**: 親しみやすいグラデーションカラー

### 🏃‍♂️ 歩数記録機能
- 📊 **リアルタイム進捗**: 10,000歩への進捗を視覚的に表示
- 🎉 **マイルストーン達成**: 段階的な達成でモチベーション維持
- 📈 **週間統計**: 詳細な歩数データと励ましメッセージ
- 🎊 **お祝い機能**: 目標達成時の楽しいアニメーション

### ♿ アクセシビリティ対応
- 🗣️ **スクリーンリーダー対応**: ARIA属性による完全対応
- ⌨️ **キーボードナビゲーション**: マウスなしでも操作可能
- 🎯 **フォーカス管理**: 明確な操作順序
- 📢 **セマンティックHTML**: 支援技術との完全互換

## 🛠️ 技術スタック

### 🎨 フロントエンド
- **React 19.1** - 最新のUIライブラリ
- **TypeScript 5.8** - 型安全な開発環境
- **Vite 7.0** - 超高速ビルドツール
- **Tailwind CSS 3.4** - ユーティリティファーストCSS

### 📱 PWA技術
- **Vite PWA Plugin** - PWA機能の自動生成
- **Workbox** - Service Workerとキャッシュ戦略
- **Web App Manifest** - アプリメタデータ
- **Service Worker** - オフライン対応・高速化

### 🚀 デプロイ・CI/CD
- **GitHub Actions** - 自動ビルド・デプロイ
- **GitHub Pages** - 静的サイトホスティング
- **自動デプロイ** - mainブランチプッシュで自動更新

### ♿ アクセシビリティ
- **ARIA属性** - スクリーンリーダー対応
- **セマンティックHTML** - 構造化されたマークアップ
- **キーボードナビゲーション** - 完全対応
- **フォーカス管理** - 明確な操作順序

## 📱 使用方法

### 🌐 Webブラウザでアクセス
1. **URLにアクセス**: [https://kotarouuu31.github.io/senior-walking-companion/](https://kotarouuu31.github.io/senior-walking-companion/)
2. **ブラウザで直接使用**: そのまま歩数記録を開始

### 📲 PWAアプリとしてインストール
1. **上記URLにアクセス**
2. **インストールプロンプトが表示**されたら「追加する」をタップ
3. **ホーム画面にアイコンが追加**されます
4. **アイコンをタップ**してネイティブアプリのように起動

### 🚶‍♂️ 基本的な使い方
1. **歩数を追加**: 「+100歩」「+500歩」「+1000歩」ボタンで記録
2. **進捗確認**: プログレスバーで10,000歩への進捗を確認
3. **マイルストーン達成**: 段階的な目標達成でお祝いメッセージ
4. **統計確認**: 週間データと励ましメッセージを表示
5. **リセット**: 新しい日は「リセット」ボタンで初期化

## 🎯 対象ユーザー

- 👴👵 **シニア世代の方々**
- 🚶‍♂️ **日常的な歩行習慣を身につけたい方**
- 📱 **スマートフォンを使い始めた高齢者**
- ♿ **アクセシビリティ機能が必要な方**
- 💪 **健康管理に興味のある方**

## 📊 パフォーマンス・品質

- ⚡ **高速起動**: Service Workerによる瞬時ロード
- 📱 **レスポンシブデザイン**: 全デバイス対応
- ♿ **アクセシビリティスコア**: 100%準拠
- 🔒 **セキュリティ**: HTTPS完全対応
- 🌐 **オフライン対応**: 完全なオフライン機能

## 🔧 開発者向け情報

### 📦 インストール
```bash
# リポジトリをクローン
git clone https://github.com/kotarouuu31/senior-walking-companion.git
cd senior-walking-companion

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 🛠️ 利用可能なスクリプト
```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果をプレビュー
npm run preview

# ESLintでコード品質チェック
npm run lint

# GitHubにプッシュ
npm run push

# PWAアイコン生成
node scripts/generate-icons.js
```

### 🏗️ プロジェクト構造
```
src/
├── components/          # Reactコンポーネント
│   ├── Header.tsx      # ヘッダー（歩数表示）
│   ├── ProgressBar.tsx # 進捗バー
│   ├── ActionButtons.tsx # 操作ボタン
│   ├── Milestones.tsx  # マイルストーン表示
│   ├── Statistics.tsx  # 統計情報
│   ├── CelebrationModal.tsx # お祝いモーダル
│   ├── InstallPrompt.tsx # PWAインストールプロンプト
│   └── Layout.tsx      # レイアウト
├── hooks/              # カスタムフック
│   └── useStepCounter.tsx # 歩数管理ロジック
├── types/              # TypeScript型定義
│   └── index.ts        # 共通型定義
└── styles/             # スタイル設定
    └── index.css       # Tailwind CSS設定

public/
├── pwa-192x192.png     # PWAアイコン（192x192）
├── pwa-512x512.png     # PWAアイコン（512x512）
├── apple-touch-icon.png # Apple Touch Icon
├── .nojekyll           # GitHub Pages設定
└── 404.html            # SPA用404ページ

.github/workflows/
└── deploy.yml          # GitHub Actions設定
```

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Requestを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🙏 謝辞

- シニア世代の健康促進に貢献できることを願っています
- アクセシビリティの重要性を認識し、すべての人が使いやすいアプリを目指しました
- PWA技術により、ネイティブアプリのような体験を提供します

---

**🚶‍♂️ 毎日10,000歩で、健康な毎日を！ 🚶‍♀️**

[![Live Demo](https://img.shields.io/badge/🌐_今すぐ試す-10000歩アプリ-success?style=for-the-badge)](https://kotarouuu31.github.io/senior-walking-companion/)
