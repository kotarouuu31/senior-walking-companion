#!/bin/bash

# GitHub Personal Access Tokenを使ってプッシュするスクリプト

# .env.localファイルから環境変数を読み込み
if [ -f .env.local ]; then
    export $(grep -v '^#' .env.local | xargs)
else
    echo "Error: .env.local file not found!"
    echo "Please create .env.local file with GITHUB_TOKEN=your_token"
    exit 1
fi

# GITHUB_TOKENが設定されているかチェック
if [ -z "$GITHUB_TOKEN" ]; then
    echo "Error: GITHUB_TOKEN not found in .env.local"
    echo "Please add GITHUB_TOKEN=your_personal_access_token to .env.local"
    exit 1
fi

# リモートURLをトークン付きに設定
echo "Setting up GitHub remote with token..."
git remote set-url origin https://$GITHUB_TOKEN@github.com/kotarouuu31/senior-walking-companion.git

# プッシュ実行
echo "Pushing to GitHub..."
git push origin main

# セキュリティのためリモートURLを元に戻す（オプション）
echo "Resetting remote URL for security..."
git remote set-url origin https://github.com/kotarouuu31/senior-walking-companion.git

echo "✅ Push completed successfully!"
