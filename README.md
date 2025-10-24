# ポーカー プリフロップレンジ 暗記サイト

ポーカーのプリフロップレンジを効率的に暗記するためのクイズサイトです。

## 機能

### クイズモード
- ランダムにハンド（例: AKs, T9o）を表示
- ユーザーは正しい色を選択
- 正誤判定とスコア表示
- 次の問題へ進む、リセット機能

### レンジ表モード
- 13×13のハンドマトリックスを表示
- 各ハンドを色分けして視覚的に確認
- 色の凡例付き

## 開発環境のセットアップ

### 必要なもの
- Node.js 18.17 以上

### インストール

依存パッケージは既にインストール済みです。

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## 技術スタック

- **Next.js 14** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

## プロジェクト構造

```
src/
├── app/
│   ├── globals.css       # グローバルスタイル
│   ├── layout.tsx        # ルートレイアウト
│   └── page.tsx          # メインページ（モード切替）
├── components/
│   ├── ColorButton.tsx   # 色選択ボタン
│   ├── HandGrid.tsx      # ハンドマトリックス表示
│   └── Quiz.tsx          # クイズモード
├── data/
│   └── ranges.json       # レンジデータ（全169ハンド）
└── lib/
    ├── constants.ts      # 定数定義
    └── types.ts          # TypeScript型定義
```

## レンジデータのカスタマイズ

`src/data/ranges.json` を編集することで、レンジ表をカスタマイズできます。

各ハンドには以下の情報が含まれます：
- `color`: 色のID
- `label`: 日本語ラベル
- `bgColor`: 背景色（HEXカラーコード）

## 色の種類

- 紫 (purple) - 最強ハンド
- 赤 (red) - プレミアムハンド
- 橙 (orange) - 強いハンド
- 黄 (yellow) - 良いハンド
- 緑 (green) - プレイアブルハンド
- 黄緑 (lightgreen) - 条件付きプレイ
- 水色 (lightblue) - スペキュレーティブ
- 白 (white) - マージナル
- 灰 (gray) - 弱いハンド
- 濃灰 (darkgray) - フォールド推奨
