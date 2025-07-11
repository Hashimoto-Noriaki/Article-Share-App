## 技術構成
- TypeScript
- React
- Nest.js
- ReactNative
- Tailwind
- CSS Modules
- Biome
- StoryBook
- TypeSpec or Swagger(オープンAPIを用いたスキーマ駆動開発)
- Jest
- Testing Library
- Docker(マルチステージビルド)
- GitHubActions
- Prisma
- GCP


## フロントエンド
### サーバー起動
```
npm run dev
```

### フロント設計
|設計|内容|
|----|---|
|features|ページ専属ロジック|
|shared|共通コンポーネント|
|pages|ルーティング|

### Docker
- ***ビルド***
```
cd frontend
docker compose build
```

- ***フロントエンド***
```
cd frontend
docker compose up -d
```

- ***docker停止***
```
docker compose down
```

### 静的解析ツールBiome
ESLintとPrettierより高速
開発スピード重視

```
npm run lint

npm run format
```

### StoryBook
```
npm run storybook
```
http://localhost:6006/ 

### トップ画像

<img width="1433" alt="スクリーンショット 2025-07-09 0 39 41" src="https://github.com/user-attachments/assets/1665de5d-c9d4-47b9-a169-c5cb3316df0b" />

## バックエンド
- サーバー起動
```
npm run start:dev
```

### Docker
- ***ビルド***
```
cd frontend
docker compose build
```

- ***docker起動***
```
cd frontend
docker compose up -d
```

- ***docker停止***
```
docker compose down
```

## スマホアプリ

XCode(テスト（iOSシミュレータや実機）、デプロイ（App Store用ビルド）時にインストール)
