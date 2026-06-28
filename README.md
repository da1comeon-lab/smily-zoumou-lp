# 増毛エクステサロンsmily LP

大阪・関目高殿の増毛エクステ専門店「増毛エクステサロンsmily」の予約獲得向けLPです。

## 技術構成

- Next.js
- TypeScript
- Tailwind CSS
- pnpm

## ローカル起動

```bash
pnpm install
pnpm dev
```

起動後、以下のURLで確認できます。

```txt
http://localhost:3000
```

## ビルド

```bash
pnpm build
```

本番起動を確認する場合は以下を実行します。

```bash
pnpm start
```

## Vercelでのデプロイ設定

GitHubにpushした後、Vercelで以下の流れでImportします。

1. Vercelの「Add New Project」からGitHubリポジトリを選択
2. Framework Presetは「Next.js」を選択
3. Install Commandは通常どおり `pnpm install`
4. Build Commandは `pnpm build`
5. Output Directoryは未設定のままでOK
6. 環境変数 `NEXT_PUBLIC_SITE_URL` を設定
7. Deployを実行

## 本番環境変数

公開URLは以下で設定してください。

```env
NEXT_PUBLIC_SITE_URL=https://smily-zoumou.com
```

`NEXT_PUBLIC_SITE_URL` は、canonical URL、OGP URL、`robots.txt`、`sitemap.xml` に使われます。

末尾の `/` は不要です。

本番URLは `http://` ではなく、Vercelで発行されるHTTPSの `https://smily-zoumou.com` に統一します。

## SEO関連

以下はNext.js側で生成されます。

- `/robots.txt`
- `/sitemap.xml`
- canonical URL
- OGPメタ情報
- LocalBusiness構造化データ

Google Search Consoleに登録する際は、公開後のURLで所有権確認を行い、`/sitemap.xml` を送信してください。

## GitHub公開手順

まだGit管理していない場合は、プロジェクト直下で以下を実行します。

```bash
git init
git add .
git commit -m "Initial LP"
git branch -M main
git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
git push -u origin main
```

すでにGitHub上で空のリポジトリを作成してから、上記の `<ユーザー名>` と `<リポジトリ名>` を実際のものに置き換えてください。

push前に以下で不要なファイルが含まれていないか確認します。

```bash
git status --short
```

`node_modules/`、`.next/`、`.env.local`、`.vercel/` が表示されない状態であればOKです。

## Git管理しないもの

以下は `.gitignore` で除外しています。

- `node_modules/`
- `.next/`
- `.next-*`
- `.env.local`
- `.env.*.local`
- `.vercel/`
- Codex作業用フォルダ

`.env.example` はサンプルとしてGit管理します。
