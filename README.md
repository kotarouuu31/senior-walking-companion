# 10000歩 - おじいちゃんを応援するPWAアプリ

**毎日1万歩を歩くおじいちゃんへの愛と技術で作った歩数記録アプリ**

このアプリは、毎日欠かさず1万歩を歩き続ける私のおじいちゃんを応援するために開発しました。シニア世代でも使いやすいUI/UXと最新のPWA技術を組み合わせ、健康的な歩行習慣をサポートする完全なWebアプリケーションです。

[![Live Demo](https://img.shields.io/badge/Live_Demo-10000歩アプリ-success?style=for-the-badge)](https://kotarouuu31.github.io/senior-walking-companion/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-green?style=for-the-badge)](https://kotarouuu31.github.io/senior-walking-companion/)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-blue?style=for-the-badge)](https://kotarouuu31.github.io/senior-walking-companion/)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/kotarouuu31/senior-walking-companion/actions)

![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite)
![PWA](https://img.shields.io/badge/PWA-Complete-FF6B6B?logo=pwa)

## 開発の背景・動機

### おじいちゃんへの想い
私のおじいちゃんは80歳を超えても毎日欠かさず1万歩を歩き続けています。雨の日も風の日も、健康のために継続する姿に感動し、「技術で何かサポートできないか」と考えてこのアプリを開発しました。

### 技術的チャレンジ
- **ユーザビリティ第一**: シニア世代が直感的に使えるUI/UX設計
- **PWA技術習得**: オフライン対応・ネイティブアプリ体験の実現
- **アクセシビリティ**: 全ての人が使えるWebアプリケーション
- **モダン開発環境**: React 19 + TypeScript + Vite の最新技術スタック

## プロジェクト概要

### このアプリの特徴
- **PWA完全対応**: ホーム画面追加・オフライン動作・高速起動
- **シニアフレンドリー**: 大きなフォント・ボタン・高コントラスト
- **完全アクセシブル**: ARIA・キーボードナビゲーション・スクリーンリーダー対応
- **高性能**: Service Worker・キャッシュ戦略・瞬時ロード
- **楽しい体験**: マイルストーン達成・お祝いアニメーション

### 技術的成果 (2025年8月完成)
- **React 19.1 + TypeScript 5.8**: 最新技術での型安全開発
- **Vite 7.0**: 超高速開発環境・HMR対応
- **PWA実装**: Manifest・Service Worker・オフライン対応
- **CI/CD構築**: GitHub Actions自動デプロイ・GitHub Pages運用
- **アクセシビリティ**: WCAG準拠・完全対応実装

## 主な特徴

### PWA（Progressive Web App）機能
- **ホーム画面に追加**: スマートフォンのアイコンから直接起動
- **オフライン対応**: インターネット接続なしでも基本機能が利用可能
- **高速起動**: Service Workerによる高速化とキャッシュ機能
- **自動更新**: 新しいバージョンが自動で適用

### シニアフレンドリーなデザイン
- **大きな文字**: 最大64pxの読みやすいフォントサイズ
- **大きなボタン**: 最小48pxのタッチしやすいボタン
- **高コントラスト**: 見やすい色彩設計
- **温かみのあるデザイン**: 親しみやすいグラデーションカラー

### 歩数記録機能
- **リアルタイム進捗**: 10,000歩への進捗を視覚的に表示
- **マイルストーン達成**: 段階的な達成でモチベーション維持
- **週間統計**: 詳細な歩数データと励ましメッセージ
- **お祝い機能**: 目標達成時の楽しいアニメーション

### アクセシビリティ対応
- **スクリーンリーダー対応**: ARIA属性による完全対応
- **キーボードナビゲーション**: マウスなしでも操作可能
- **フォーカス管理**: 明確な操作順序
- **セマンティックHTML**: 支援技術との完全互換

## 技術スタック

### フロントエンド
- **React 19.1** - 最新のUIライブラリ
- **TypeScript 5.8** - 型安全な開発環境
- **Vite 7.0** - 超高速ビルドツール
- **Tailwind CSS 3.4** - ユーティリティファーストCSS

### PWA技術
- **Vite PWA Plugin** - PWA機能の自動生成
- **Workbox** - Service Workerとキャッシュ戦略
- **Web App Manifest** - アプリメタデータ
- **Service Worker** - オフライン対応・高速化

### デプロイ・CI/CD
- **GitHub Actions** - 自動ビルド・デプロイ
- **GitHub Pages** - 静的サイトホスティング
- **自動デプロイ** - mainブランチプッシュで自動更新

### アクセシビリティ
- **ARIA属性** - スクリーンリーダー対応
- **セマンティックHTML** - 構造化されたマークアップ
- **キーボードナビゲーション** - 完全対応
- **フォーカス管理** - 明確な操作順序

## 使用方法

### Webブラウザでアクセス
1. **URLにアクセス**: [https://kotarouuu31.github.io/senior-walking-companion/](https://kotarouuu31.github.io/senior-walking-companion/)
2. **ブラウザで直接使用**: そのまま歩数記録を開始

### PWAアプリとしてインストール
1. **上記URLにアクセス**
2. **インストールプロンプトが表示**されたら「追加する」をタップ
3. **ホーム画面にアイコンが追加**されます
4. **アイコンをタップ**してネイティブアプリのように起動

### 基本的な使い方
1. **歩数を追加**: 「+100歩」「+500歩」「+1000歩」ボタンで記録
2. **進捗確認**: プログレスバーで10,000歩への進捗を確認
3. **マイルストーン達成**: 段階的な目標達成でお祝いメッセージ
4. **統計確認**: 週間データと励ましメッセージを表示
5. **リセット**: 新しい日は「リセット」ボタンで初期化

## 対象ユーザー

- **シニア世代の方々**
- **日常的な歩行習慣を身につけたい方**
- **スマートフォンを使い始めた高齢者**
- **アクセシビリティ機能が必要な方**
- **健康管理に興味のある方**

## 技術的な取り組み・実装内容

### フロントエンド開発
- **React 19.1 + TypeScript 5.8**: 最新技術での型安全な開発環境構築
- **PWA完全実装**: Service Worker・Manifest・オフライン対応の実現
- **アクセシビリティ対応**: WCAG準拠・支援技術との完全互換性
- **モダン開発環境**: Vite・ESLint・PostCSS・Tailwind CSSによる効率的開発

### 設計・開発プロセス
- **ユーザー中心設計**: シニア世代の特性を考慮したUI/UX設計
- **技術選定の考慮**: パフォーマンス・保守性・拡張性を重視した技術選択
- **品質管理**: TypeScript型チェック・ESLint・継続的品質向上
- **自動化**: GitHub Actions・CI/CD・デプロイ自動化の実装

### プロジェクトの特徴
- **実用性重視**: 実際のユーザー（おじいちゃん）のニーズに基づく開発
- **完成度**: 企画から実装・デプロイまでの一貫した開発体験
- **技術習得**: 最新のWeb技術（React 19・PWA）の実践的活用
- **社会的意義**: 高齢者の健康促進という社会課題への技術的アプローチ

## 技術的成果・品質指標

- **パフォーマンス**: Service Workerによる瞬時ロード・キャッシュ最適化
- **レスポンシブ**: 全デバイス対応・PWAネイティブ体験
- **アクセシビリティ**: WCAG 2.1 AA準拠・スクリーンリーダー完全対応
- **セキュリティ**: HTTPS・CSP・セキュアヘッダー対応
- **オフライン**: 完全なオフライン機能・データ永続化

## 開発者向け情報

### インストール
```bash
# リポジトリをクローン
git clone https://github.com/kotarouuu31/senior-walking-companion.git
cd senior-walking-companion

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 利用可能なスクリプト
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

### プロジェクト構造
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

## コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Requestを作成

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 学習・成長の記録

### このプロジェクトで習得した技術
- **React 19の新機能**: 最新のReact機能・パフォーマンス最適化
- **TypeScript実践**: 大規模アプリでの型安全性・開発効率向上
- **PWA開発**: Service Worker・Manifest・オフライン対応の実装
- **アクセシビリティ**: WCAG準拠・支援技術対応・インクルーシブデザイン
- **CI/CD**: GitHub Actions・自動テスト・デプロイ自動化

### 開発プロセス・工夫点
- **ユーザー中心設計**: おじいちゃんの使いやすさを最優先に設計
- **段階的実装**: 基本機能→PWA→アクセシビリティ→デプロイの順序立てた開発
- **品質管理**: ESLint・TypeScript・コードレビューによる品質担保
- **継続的改善**: ユーザビリティテスト・フィードバック反映

## おわりに

このアプリは、毎日1万歩を歩き続けるおじいちゃんへの感謝と尊敬の気持ちから生まれました。技術を通じて大切な人を支えることの意味を学び、同時に最新のWeb技術を実践的に習得できた貴重なプロジェクトです。

**個人的な動機から始まったこのプロジェクトは、技術力・問題解決能力・人への想いを形にした実践的な開発経験となりました。**

---



[![Live Demo](https://img.shields.io/badge/今すぐ試す-10000歩アプリ-success?style=for-the-badge)](https://kotarouuu31.github.io/senior-walking-companion/)
[![GitHub](https://img.shields.io/badge/GitHub-プロジェクト詳細-orange?style=for-the-badge)](https://github.com/kotarouuu31/senior-walking-companion)
