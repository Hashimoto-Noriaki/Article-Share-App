## 技術構成
- TypeScript
- React
- Nest.js
- ReactNative
- Tailwind
- CSS Modules
- Biome
- StoryBook
- TypeSpec or Swagger(オープンAPIを用いたスキーマ駆動開発。スキーマファーストで作っていく。)
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

### テスト
Jest、TestingLibrary
```
npm test
```

### トップ画像

<img width="1436" height="733" alt="スクリーンショット 2025-07-12 4 16 39" src="https://github.com/user-attachments/assets/7ff1a1ea-4075-4f56-bb40-ae0def28ea33" />

<img width="1435" height="775" alt="スクリーンショット 2025-07-12 14 37 55" src="https://github.com/user-attachments/assets/29e409aa-0111-4650-8933-f83015702a85" />

## スマホアプリ
XCode(テスト（iOSシミュレータや実機）、デプロイ（App Store用ビルド）時にインストール)


## バックエンド
- サーバー起動
```
npm run start:dev
```
- Prisma起動
```
npx prisma start
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
